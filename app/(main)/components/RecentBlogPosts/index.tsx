import { ArrowLink } from "components/ArrowLink";
import { sanityClient } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { PostPreview } from "types";

import { Item, ItemLoading } from "./Item";

const query = groq`
*[_type == "post"] | order(date.published desc) [0..3] {
  _id,
  slug,
  title,
  description,
  date {
    published,
    updated
  }
}
`;

export function RecentBlogPosts() {
  return (
    <section className="md:w-1/2">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Recent blog posts</h3>
      <ul className="space-y-4 md:space-y-8">
        <Suspense fallback={<Loading />}>
          {/* @ts-ignore */}
          <Posts />
        </Suspense>
      </ul>

      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/blog">All posts</ArrowLink>
      </h4>
    </section>
  );
}

async function Posts() {
  const posts: PostPreview[] = await sanityClient.fetch(query);

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      {posts.map(post => (
        <Item key={post._id} title={post.title} description={post.description} slug={post.slug} />
      ))}
    </>
  );
}

function Loading() {
  return (
    <>
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
      <ItemLoading />
    </>
  );
}
