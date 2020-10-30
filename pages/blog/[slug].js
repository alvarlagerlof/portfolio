import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { formatDate } from "../../libs/utils/date";
import { getPosts, getPostsPublished, getPost } from "../../libs/blog";
import getImage from "../../libs/image";
import isDev from "../../libs/is-dev";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import Header from "../../components/Header";
import Article from "../../components/Article";
import InfoTag from "../../components/InfoTag";
import CustomReactMarkdown from "../../components/CustomReactMarkdown";

import { Title, Subtitle, Caption } from "../../components/Headings";

export default function BlogPost({
  image,
  post: {
    data: { title, description, published, draft },
    content,
  },
}) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#D9D9D9", backgroundBottom: "#FAFAFA", accent: "#b11226" }}
    >
      <Wrapper>
        <Head>
          <title>{title} - Alvar Lagerlöf</title>
          <meta name="description" content={description}></meta>
          <meta property="og:title" content={title}></meta>
          <meta property="og:type" content="acticle"></meta>
          <meta property="og:description" content={description}></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            {draft && <InfoTag spacedBottom>Draft</InfoTag>}
            <Caption>{formatDate(published)}</Caption>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Header>
          <Article>
            <CustomReactMarkdown>{content}</CustomReactMarkdown>
          </Article>
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
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
      image: await getImage("blog/" + slug, post.data.title, post.data.description, "#D9D9D9"),
    },
  };
}
