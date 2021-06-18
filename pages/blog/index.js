import Link from "next/link";
import Head from "next/head";

import ArrowLink from "../../components/ArrowLink";
import Separator from "../../components/Separator";

import { formatDate } from "../../libs/utils/date";
import { getPostsDrafts, getPostsSectioned } from "../../libs/blog";
import isDev from "../../libs/is-dev";

export default function Blog({ postsSectioned, drafts, isDev }) {
  return (
    <>
      <Head>
        <title>Blog - Alvar Lagerlöf</title>
        <meta name="description" content="Personal blog"></meta>
        <meta property="og:title" content="Alvar Lagerlöf's blog"></meta>
        <meta property="og:description" content="Personal blog"></meta>
      </Head>

      <header>
        <h1 className="font-heading text-7xl mb-4">Alvar's Blog</h1>

        <h2 className="font-subheading text-2xl">
          I try to put my thoughts into words sometimes. RSS is available{" "}
          <ArrowLink href="https://alvar.dev/feed.xml">here</ArrowLink>
        </h2>
      </header>

      <ul>
        {isDev && (
          <li key="Drafts" className="mt-14">
            <Separator />
            <div className="flex flex-row items-start mt-14">
              <h3 className="font-heading text-5xl w-48">Drafts</h3>
              <PostList posts={drafts} />
            </div>
          </li>
        )}

        {Object.entries(postsSectioned)
          .sort((a, b) => b[0] - a[0])
          .map(([year, posts]) => {
            return (
              <li key={year} className="mt-14">
                <Separator />
                <div className="flex flex-row items-start mt-14">
                  <h3 className="font-heading text-5xl w-48">{year}</h3>
                  <PostList posts={posts} />
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

function PostList({ posts }) {
  const truncate = (input, len) => {
    return input.length > len ? `${input.substring(0, len)}...` : input;
  };

  return (
    <ul className="space-y-8">
      {posts.map(({ slug, title, description, published }) => {
        return (
          <li key={title}>
            <Link href={"blog/" + slug}>
              <a>
                <em className="block">{formatDate(published)}</em>
                <h4 className="font-subheading font-semibold text-2xl mb-2">{title}</h4>
                <p>{truncate(description, 100)}</p>
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
