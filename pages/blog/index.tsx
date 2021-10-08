import Link from "next/link";

import { usePreviewSubscription } from "lib/sanity/sanity";
import { getClient } from "lib/sanity/sanity.server";
import { formatDate } from "lib/utils/date";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";

import { Post, Sections } from "types";

import groq from "groq";
import section from "lib/utils/section";

type BlogProps = {
  postsSectioned: Sections;
  drafts: Post[];
  data: Partial<Post>[];
  preview: boolean;
};

const postsQuery = groq`
*[_type == "post"] | order(datePublished desc) {
  _id,
  slug,
  title,
  description,
  datePublished
}
`;

export default function Blog({ data, preview }: BlogProps) {
  const { data: posts } = usePreviewSubscription(postsQuery, {
    initialData: data,
    enabled: preview,
  });

  const sections = section(posts);

  return (
    <>
      <Meta title="Blog" description="I try to put my thoughts into words sometimes" />

      <WithDividers direction="vertical">
        <Header />

        <ul>
          <WithDividers direction="vertical">
            {Object.entries(sections)
              .sort((a: any, b: any) => b[0] - a[0])
              .map(([year, posts]) => {
                return (
                  <li key={year} className="flex flex-col md:flex-row items-start">
                    <h3 className="font-heading text-3xl md:text-5xl md:min-w-[180px] mb-8 md:mb-0">
                      {year}
                    </h3>
                    <PostList posts={posts} />
                  </li>
                );
              })}
          </WithDividers>
        </ul>
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
  const truncate = (input, len) => {
    return input.length > len ? `${input.substring(0, len)}...` : input;
  };

  return (
    <ul className="space-y-8">
      {posts.map((post: Post) => {
        return (
          <li key={post._id}>
            <Link href={`blog/${post.slug?.current}`} passHref>
              <a>
                <em className="block">{formatDate(post.datePublished)}</em>
                <h4 className="font-subheading font-semibold text-xl md:text-2xl mb-2">
                  {post.title}
                </h4>
                <p>{truncate(post.description, 100)}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Partial<Post>[] = await getClient(preview).fetch(postsQuery);
  return {
    props: {
      data: posts,
      preview,
    },
  };
}
