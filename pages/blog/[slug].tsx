import Head from "next/head";

import { Post } from "../../types";

import { formatDate } from "libs/utils/date";
import { getPosts, getPostsPublished, getPost } from "libs/blog";
import isDev from "libs/is-dev";

import CustomReactMarkdown from "components/CustomReactMarkdown";
import WithDividers from "components/WithDividers";

type PostProps = {
  post: Post;
};

export default function BlogPost({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Alvar Lagerlöf</title>
        <meta name="description" content={post.description}></meta>
        <meta property="og:title" content={post.title}></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:description" content={post.description}></meta>
      </Head>

      <WithDividers direction="vertical">
        <Header post={post} />
        <Article post={post} />
      </WithDividers>
    </>
  );
}

function Header({ post }: PostProps) {
  return (
    <header>
      {post.draft && (
        <p className=" bg-primary px-2 rounded-full inline-block text-white h-6 mb-8">Draft</p>
      )}
      <p className="font-medium md:text-xl mb-2">{formatDate(post.published)}</p>
      <h1 className="font-heading text-4xl md:text-7xl mb-4 ">{post.title}</h1>
      <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch]">{post.description}</h2>
    </header>
  );
}

function Article({ post }: PostProps) {
  return (
    <article>
      <div className="prose">
        <CustomReactMarkdown>{post.content}</CustomReactMarkdown>
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  const posts: Post[] = isDev() ? await getPosts() : await getPostsPublished();

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post: Post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
}
