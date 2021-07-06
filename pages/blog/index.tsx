import Link from "next/link";
import Head from "next/head";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";

import { formatDate } from "libs/utils/date";
import { getPostsDrafts, getPostsSectioned } from "libs/blog";
import isDev from "libs/is-dev";
import { Post, Sections } from "../../types";

type BlogProps = {
  postsSectioned: Sections;
  drafts: Post[];
  isDev: boolean;
};

export default function Blog({ postsSectioned, drafts, isDev }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog - Alvar Lagerlöf</title>
        <meta name="description" content="Personal blog"></meta>
        <meta property="og:title" content="Alvar Lagerlöf's blog"></meta>
        <meta property="og:description" content="Personal blog"></meta>
      </Head>

      <WithDividers direction="vertical">
        <Header />

        <ul>
          <WithDividers direction="vertical">
            {isDev && (
              <li key="Drafts" className="flex flex-col md:flex-row items-start">
                <h3 className="font-heading text-3xl md:text-5xl md:min-w-[180px] mb-8 md:mb-0">
                  Drafts
                </h3>
                <PostList posts={drafts} />
              </li>
            )}

            <>
              {Object.entries(postsSectioned)
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
            </>
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
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  const truncate = (input, len) => {
    return input.length > len ? `${input.substring(0, len)}...` : input;
  };

  return (
    <ul className="space-y-8">
      {posts.map((post: Post) => {
        return (
          <li key={post.slug}>
            <Link href={`blog/${post.slug}`}>
              <a>
                <em className="block">{formatDate(post.date.published)}</em>
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

export async function getStaticProps() {
  return {
    props: {
      drafts: await getPostsDrafts(),
      postsSectioned: await getPostsSectioned(),
      isDev: isDev(),
    },
  };
}
