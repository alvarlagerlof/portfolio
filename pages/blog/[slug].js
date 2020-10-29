import ReactMarkdown from "react-markdown";
import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import gfm from "remark-gfm";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

import { formatDate } from "../../libs/utils/date";
import { getPosts, getPost } from "../../libs/blog";
import { getImage } from "../../libs/image";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import Header from "../../components/Header";
import Section from "../../components/Section";
import CtaLink from "../../components/CtaLink";
import { Serif, SansSerif, Bold, Title, Subtitle, Caption } from "../../components/Headings";
import InfoTag from "../../components/InfoTag";

export default function BlogPost({
  image,
  post: {
    data: { title, description, date, draft },
    content,
  },
}) {
  const renderers = {
    heading: ({ level, children }) => {
      switch (level) {
        case 1:
          return <h3>{children}</h3>;
        case 2:
          return <h4>{children}</h4>;
        case 3:
          return <h5>{children}</h5>;
        default:
          return <p>Heading {level} not implemented</p>;
      }
    },
    image: ({ src, alt }) => {
      return <Image src={src} alt={alt} unsized loading="lazy" />;
    },
    link: ({ href, children }) => (
      <CtaLink newTab href={href}>
        {children}
      </CtaLink>
    ),
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          customStyle={{
            marginTop: "16px",
            marginBottom: "32px",
            borderRadius: "8px",
            padding: "16px",
            fontFamily: "unset",
          }}
          style={style}
          language={language}
          children={value}
        />
      );
    },
  };

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
            <Caption>{formatDate(date)}</Caption>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </Header>

          <ArticleContent>
            <ReactMarkdown plugins={[gfm]} renderers={renderers}>
              {content}
            </ReactMarkdown>
          </ArticleContent>
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const ArticleContent = styled.article`
  & h3,
  & h4,
  & h5 {
    ${Bold}
    ${SansSerif}
    margin-top: 48px;
    margin-bottom: 8px;
  }

  & h3 {
    font-size: 2rem;
  }

  & h4 {
    font-size: 1.6em;
  }

  & h5 {
    font-size: 1.3rem;
  }

  & p + p {
    margin-top: 16px;
  }

  & strong {
    ${Bold}
  }

  & > ul,
  & > ol {
    margin: 32px 24px;
  }

  & > ul ul,
  & > ol ol {
    margin: 8px 24px;
  }

  & ul li,
  & ol li {
    margin-bottom: 16px;
  }

  & img {
    display: block;
    margin: 64px auto;
    max-width: 100%;
    max-height: 500px;
    border-radius: 8px;
  }

  & blockquote {
    margin: 32px 0;
    padding: 8px 24px;
    border-left: 4px solid ${props => props.theme.accent};

    & p {
      ${Serif}
      margin: 0;
      font-size: 1.3rem;
    }

    & strong {
      font-size: 1rem;
      display: block;
      margin-top: 20px;
    }
  }

  & p code {
    background: #e6e6e6;
    border-radius: 4px;
    padding: 2px 4px;
    margin: -2px 0px;
  }

  /* for <pre> see customStyles on the syntax highlighter */
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
