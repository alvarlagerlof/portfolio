import { ArrowLink } from "components/ArrowLink";
import { WithDividers } from "components/WithDividers";
import { getClient } from "lib/sanity/sanity.server";
import { Metadata } from "next";
import { groq } from "next-sanity";
import { cache, Suspense } from "react";
import { Post, PostPreview, Sections } from "types";

import { Posts } from "./components/Posts";
import { ItemLoading } from "./components/Posts/Item";

const query = groq`
*[_type == "post"] | order(date.published desc) {
  _id,
  slug,
  title,
  description,
  date,
  body
}
`;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Blog";
  const description = "I try to put my thoughts into words sometimes";

  const domain = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return {
    title,
    description,
    openGraph: {
      images: encodeURI(`${domain}/api/og/default?title=${title}&description=${description}`),
    },
  };
}

export default function BlogPage() {
  return (
    <WithDividers direction="vertical">
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">Blog</h1>

        <h2 className="font-subheading text-xl md:text-2xl max-w-[45ch]">
          I try to put my thoughts into words sometimes. RSS is available{" "}
          <ArrowLink href="/feed.xml">here</ArrowLink>
        </h2>
      </header>

      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <Data />
      </Suspense>
    </WithDividers>
  );
}

const getSections = cache(async () => {
  const posts: PostPreview[] = await getClient().fetch(query);

  const sections = posts.reduce((acc: Sections, curr: Post) => {
    const year: number = new Date(curr.date.published).getFullYear();

    return {
      ...acc,
      [year]: acc[year] ? [...acc[year], curr] : [curr],
    };
  }, {});

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return sections;
});

async function Data() {
  const sections = await getSections();

  return (
    <WithDividers direction="vertical">
      {Object.entries(sections)
        .sort((a: any, b: any) => b[0] - a[0])
        .map(([year, posts]) => {
          return (
            <section key={year} className="flex flex-col md:flex-row items-start">
              <h3 className="font-heading text-3xl md:text-5xl md:min-w-[180px] mb-8 md:mb-0">
                {year}
              </h3>
              <Posts posts={posts} />
            </section>
          );
        })}
    </WithDividers>
  );
}

function Loading() {
  return (
    <>
      <div className="space-y-8">
        <ItemLoading withYear={true} />
        <ItemLoading withYear={false} />
        <ItemLoading withYear={false} />
      </div>
      <div className="space-y-8">
        <ItemLoading withYear={true} />
        <ItemLoading withYear={false} />
      </div>
    </>
  );
}
