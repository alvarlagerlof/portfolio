import Head from "next/head";

import { formatDate } from "libs/utils/date";
import { getPosts, getPostsPublished, getPost } from "libs/blog";
import isDev from "libs/is-dev";

import CustomReactMarkdown from "components/CustomReactMarkdown";
import WithDividers from "components/WithDividers";

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
        <meta property="og:type" content="article"></meta>
        <meta property="og:description" content={description}></meta>
      </Head>

      <WithDividers direction="vertical">
        <Header title={title} description={description} published={published} draft={draft} />
        <Article content={content} />
      </WithDividers>
    </>
  );
}

function Header({ title, description, published, draft }) {
  return (
    <header>
      {draft && (
        <p className=" bg-primary px-2 rounded-full inline-block text-white h-6 mb-8">Draft</p>
      )}
      <p className="font-medium md:text-xl mb-2">{formatDate(published)}</p>
      <h1 className="font-heading text-4xl md:text-7xl mb-4 ">{title}</h1>
      <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch]">{description}</h2>
    </header>
  );
}

function Aside() {
  return;
}

function Article({ content }) {
  return (
    <article>
      <div className="prose">
        <CustomReactMarkdown>{content}</CustomReactMarkdown>
      </div>
    </article>
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
