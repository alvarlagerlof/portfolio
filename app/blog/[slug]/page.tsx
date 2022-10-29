import { getClient } from "lib/sanity/sanity.server";
import { formatDate } from "lib/utils/date";

import CustomBlockContent from "components/CustomBlockContent";
import WithDividers from "components/WithDividers";
import { Post } from "types";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import SkeletonText from "components/SkeletonText";

const query = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  date,
  body[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

export default async function PostPage({ params: { slug } }) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-ignore */}
      <Content slug={slug} />
    </Suspense>
  );
}

async function Content({ slug }: { slug: string }) {
  const post: Post = await getClient().fetch(query, {
    slug,
  });

  await new Promise(r => setTimeout(r, 1000));

  if (!post) notFound();

  return (
    <WithDividers direction="vertical">
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-8">{post.title}</h1>
        <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch] mb-8">
          {post.description}
        </h2>
        <p className="font-medium">
          Published {formatDate(post.date.published)}
          {post.date.updated && ` - Updated ${formatDate(post.date.updated)}`}
        </p>
      </header>

      <article>
        <div className="prose">
          <CustomBlockContent blocks={post.body} />
        </div>
      </article>
    </WithDividers>
  );
}

function Loading() {
  return (
    <WithDividers direction="vertical">
      <div>
        <SkeletonText className="w-[40ch] h-[3.5rem] mb-4" />
        <SkeletonText className="w-[60ch] h-[2rem] mb-8" />
        <SkeletonText className="w-[30ch] h-[2rem]" />
      </div>
      <div>
        <SkeletonText className="w-[64ch] h-[50rem]" />
      </div>
    </WithDividers>
  );
}
