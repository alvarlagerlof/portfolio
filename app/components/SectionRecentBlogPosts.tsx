import ArrowLink from "components/ArrowLink";
import { getClient } from "lib/sanity/sanity.server";
import { groq } from "next-sanity";
import { Suspense } from "react";
import { PostPreview } from "types";
import BlogPostItem from "./BlogPostItem";

const query = groq`
*[_type == "post"] | order(date.published desc) [0..3] {
  _id,
  slug,
  title,
  description,
  "date": {
    published,
    updated
  }
}
`;

export default function SectionRecentBlogPosts() {
  return (
    <section className="w-1/2">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Recent blog posts</h3>
      <Suspense fallback={<Skeleton />}>
        <List />
      </Suspense>
    </section>
  );
}

function SkeletonBlogPost() {
  return (
    <div className="space-y-3">
      <div className="block w-4/5 h-6 bg-skeleton rounded" />
      <div className="block w-4/5 h-4 bg-skeleton rounded" />
    </div>
  );
}

function Skeleton() {
  return (
    <div className="space-y-8">
      <SkeletonBlogPost />
      <SkeletonBlogPost />
      <SkeletonBlogPost />
      <SkeletonBlogPost />
    </div>
  );
}

async function List() {
  const posts: PostPreview[] = await getClient().fetch(query);

  await new Promise(r => setTimeout(r, 2000));

  return (
    <>
      <ul className="space-y-4 md:space-y-8">
        {posts.map(post => (
          <BlogPostItem post={post} key={post._id} />
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/blog">All posts</ArrowLink>
      </h4>
    </>
  );
}
