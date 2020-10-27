import styled, { ThemeProvider } from "styled-components";

import Head from "next/head";

import { getPostsSectioned } from "../../api/blog";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import BlogPreview from "../../components/BlogPreview";
import Section from "../../components/Section";
import ItemGrid from "../../components/ItemGrid";

export default function Blog({ postsSectioned }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#D9D9D9 ", backgroundBottom: "#FAFAFA", accent: "#AD3A00" }}
    >
      <Wrapper>
        <Head>
          <title>Alvar Lagerlöf's blog</title>
          <meta name="description" content="Personal blog"></meta>
        </Head>

        <NavBar />

        <Main>
          <Section>
            <YearList>
              {Object.entries(postsSectioned)
                .sort((a, b) => b[0] - a[0])
                .map(([year, posts]) => {
                  return <Year key={year} year={year} posts={posts} />;
                })}
            </YearList>
          </Section>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

function Year({ year, posts }) {
  return (
    <StyledYear>
      <h1>{year}</h1>
      <ItemGrid>
        {posts.map(post => {
          return (
            <li key={post.title}>
              <BlogPreview data={post} />
            </li>
          );
        })}
      </ItemGrid>
    </StyledYear>
  );
}

const YearList = styled.ul`
  list-style: none;
`;

const StyledYear = styled.li`
  margin: 64px 0;

  & > h1 {
    margin-bottom: 16px;
  }

  & > ul {
    list-style: none;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      postsSectioned: await getPostsSectioned(),
    },
  };
}
