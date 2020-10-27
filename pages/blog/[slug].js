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
import { getImage } from "../../api/image";

export default function BlogPost({
  image,
  post: {
    data: { title, description, date },
    content,
  },
}) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#D9D9D9", backgroundBottom: "#FAFAFA", accent: "#AD3A00" }}
    >
      <Wrapper>
        <Head>
          <title>{title} - Alvar Lagerlöf</title>
          <meta name="description" content={description}></meta>
          <meta property="og:title" content={title}></meta>
          <meta property="og:type" content="acticle"></meta>
          <meta property="og:site_name" content="Alvar Lagerlöf"></meta>
          <meta property="og:image" content={image}></meta>
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
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
  const post = await getPost(slug);

  return {
    props: {
      post,
      image: await getImage("blog/" + slug, post.data.title, post.data.description, "#D9D9D9"),
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
