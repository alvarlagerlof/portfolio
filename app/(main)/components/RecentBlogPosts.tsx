import { ArrowLink } from "components/ArrowLink";
import { createSanityClientWithDraftMode } from "lib/sanity/client";
import { groq } from "next-sanity";
import { Suspense } from "react";
import Link from "next/link";
import { PostPreview } from "types";

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
        <Suspense fallback={<RecentBlogPostsListLoading />}>
          {/* @ts-ignore */}
          <RecentBlogPostsList />
        </Suspense>
      </ul>

      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/blog">All posts</ArrowLink>
      </h4>
    </section>
  );
}

async function RecentBlogPostsList() {
  const posts: PostPreview[] = await createSanityClientWithDraftMode().fetch(query);

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  return (
    <>
      {posts.map(post => (
        <PostItem
          key={post._id}
          title={post.title}
          description={post.description}
          slug={post.slug}
        />
      ))}
    </>
  );
}

function RecentBlogPostsListLoading() {
  return (
    <>
      <PostItemLoading />
      <PostItemLoading />
      <PostItemLoading />
      <PostItemLoading />
    </>
  );
}

export function PostItem({ title, description, slug }: Omit<PostPreview, "_id" | "date" | "body">) {
  return (
    <li>
      <h4 className="text-xl font-subheading font-semibold mb-1">
        <Link href={`/blog/${slug?.current}`}>{title}</Link>
      </h4>
      <p>{description}</p>
    </li>
  );
}

export function PostItemLoading() {
  return (
    <div className="space-y-3">
      <div className="block w-3/5 h-6 bg-skeleton rounded" />
      <div className="block w-full sm:w-4/5 h-4 bg-skeleton rounded" />
    </div>
  );
}
