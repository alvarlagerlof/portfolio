import Head from "next/head";

import { formatDate } from "../../libs/utils/date";
import { getPosts, getPostsPublished, getPost } from "../../libs/blog";
import isDev from "../../libs/is-dev";

import CustomReactMarkdown from "../../components/CustomReactMarkdown";
import Separator from "../../components/Separator";

export default function BlogPost({
  post: {
    data: { title, description, published, draft },
    content,
  },
}) {
  return (
    <>
      <Head>
        <title>{title} - Alvar Lagerlöf</title>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:type" content="acticle"></meta>
        <meta property="og:description" content={description}></meta>
      </Head>

      <header>
        {draft && (
          <p className=" bg-primary px-2 rounded-full inline-block text-white h-6 mb-8">Draft</p>
        )}{" "}
        <p className="font-medium md:text-xl mb-2">{formatDate(published)}</p>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">{title}</h1>
        <h2 className="font-subheading text-xl md:text-2xl">{description}</h2>
      </header>

      <Separator />

      <article>
        <CustomReactMarkdown>{content}</CustomReactMarkdown>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = isDev() ? await getPosts() : await getPostsPublished();

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
}
