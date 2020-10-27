import ReactMarkdown from "react-markdown";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";

import { formatDate } from "../../api/utils/date";
import { getPosts, getPost } from "../../api/blog";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import Header from "../../components/Header";

export default function BlogPost({ content, data: { title, description, date } }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#D9D9D9 ", backgroundBottom: "#FAFAFA", accent: "#AD3A00" }}
    >
      <Wrapper>
        <Head>
          <title>{title} - Alvar Lagerlöf's blog</title>
          <meta name="description" content={description}></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <HeaderDate>{formatDate(date)}</HeaderDate>

            <h1>{title}</h1>
            <h2>{description}</h2>
          </Header>

          <Article>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Article>
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const HeaderDate = styled.h3`
  margin-bottom: 32px;
`;

const Article = styled.article`
  margin-top: 64px;
`;

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
