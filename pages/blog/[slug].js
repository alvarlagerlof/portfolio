import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { getPosts, getPost } from "../../api/blog";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";

export default function BlogPost({ content, data: { title, description, date } }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Blog</title>
      </Head>

      <NavBar />

      <Main>
        <header>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <h4>{date}</h4>
        </header>

        <article>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      ...(await getPost(slug)),
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(post => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
}
