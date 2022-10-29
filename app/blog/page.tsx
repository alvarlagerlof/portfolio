import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";

import section from "lib/utils/section";

import { Posts } from "./components/Posts";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { cache, Suspense } from "react";

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

export const revalidate = 30;

export default function BlogPage() {
  return (
    <WithDividers direction="vertical">
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">Blog</h1>

        <h2 className="font-subheading text-xl md:text-2xl max-w-[45ch]">
          I try to put my thoughts into words sometimes. RSS is available{" "}
          <ArrowLink href="https://alvar.dev/feed.xml">here</ArrowLink>
        </h2>
      </header>

      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <Data />
      </Suspense>
    </WithDividers>
  );
}

const getSections = cache(async id => {
  const posts = await getClient().fetch(query);
  const sections = section(posts);

  await new Promise(r => setTimeout(r, 300));

  return sections;
});

async function Data() {
  const sections = await getSections("heksan");

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
