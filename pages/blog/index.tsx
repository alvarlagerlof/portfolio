import Link from "next/link";

import { getClient } from "lib/sanity/sanity.server";
import { formatDate } from "lib/utils/date";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";

import { Post, Sections } from "types";

import groq from "groq";
import section from "lib/utils/section";
import generateRSS from "lib/rss";
import { useRef } from "react";

type BlogProps = {
  posts: Partial<Post>[];
};

const postsQuery = groq`
*[_type == "post"] | order(date.published desc) {
  _id,
  slug,
  title,
  description,
  date,
  body
}
`;

export default function Blog({ posts }: BlogProps) {
  const sections = section(posts);

  return (
    <>
      <Meta title="Blog" description="I try to put my thoughts into words sometimes" />

      <WithDividers direction="vertical">
        <Header />

        <WithDividers direction="vertical">
          {Object.entries(sections)
            .sort((a: any, b: any) => b[0] - a[0])
            .map(([year, posts]) => {
              return (
                <section key={year} className="flex flex-col md:flex-row items-start">
                  <h3 className="font-heading text-3xl md:text-5xl md:min-w-[180px] mb-8 md:mb-0">
                    {year}
                  </h3>
                  <PostList posts={posts} />
                </section>
              );
            })}
        </WithDividers>
      </WithDividers>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1 className="font-heading text-4xl md:text-7xl mb-4">Blog</h1>

      <h2 className="font-subheading text-xl md:text-2xl max-w-[45ch]">
        I try to put my thoughts into words sometimes. RSS is available{" "}
        <ArrowLink href="https://alvar.dev/feed.xml">here</ArrowLink>
      </h2>
    </header>
  );
}

type PostListProps = {
  posts: Partial<Post>[];
};

function PostList({ posts }: PostListProps) {
  return (
    <ul className="space-y-8">
      {posts.map((post: Post) => {
        return <PostItem key={post._id} post={post} />;
      })}
    </ul>
  );
}

function PostItem({ post }: { post: Post }) {
  const link = useRef(null);

  const truncate = (input, len) => {
    return input.length > len ? `${input.substring(0, len)}...` : input;
  };

  return (
    <li
      onClick={e => {
        if (link.current !== e.target) {
          link.current.click();
        }
      }}
      className="cursor-pointer"
    >
      <em className="block">{formatDate(post.date.published)}</em>
      <h4 className="font-subheading font-semibold text-xl md:text-2xl mb-2">
        <Link href={`blog/${post.slug?.current}`} passHref>
          <a ref={link}>{post.title}</a>
        </Link>
      </h4>
      <p>{truncate(post.description, 100)}</p>
    </li>
  );
}

export async function getStaticProps() {
  const posts: Partial<Post>[] = await getClient().fetch(postsQuery);

  generateRSS(posts);

  return {
    props: {
      posts,
    },
  };
}
