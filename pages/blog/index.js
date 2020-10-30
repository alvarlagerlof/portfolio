import styled, { ThemeProvider } from "styled-components";
import branchName from "current-git-branch";

import Head from "next/head";

import { getPostsDrafts, getPostsSectioned } from "../../libs/blog";
import { getImage } from "../../libs/image";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import BlogPreview from "../../components/BlogPreview";
import Section from "../../components/Section";
import ItemGrid from "../../components/ItemGrid";
import Header from "../../components/Header";

import { Title, Subtitle } from "../../components/Headings";
import CtaLink from "../../components/CtaLink";

export default function Blog({ image, postsSectioned, drafts, branch }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#D9D9D9", backgroundBottom: "#FAFAFA", accent: "#b11226" }}
    >
      <Wrapper>
        <Head>
          <title>Blog - Alvar Lagerlöf</title>
          <meta name="description" content="Personal blog"></meta>
          <meta property="og:title" content="Alvar Lagerlöf's blog"></meta>
          <meta property="og:description" content="Personal blog"></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <Title>My blog</Title>
            <Subtitle>
              This is a place where I'll try to put my thoughts into words sometimes. Let's see
              where it goes. RSS is available{" "}
              <CtaLink newTag href="https://alvar.dev/feed.xml">
                Here
              </CtaLink>
            </Subtitle>
          </Header>

          {branch != "main" && (
            <Section>
              <ItemGrid>
                {drafts.map(post => {
                  return (
                    <li key={post.title}>
                      <BlogPreview data={post} />
                    </li>
                  );
                })}
              </ItemGrid>
            </Section>
          )}

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
      <Title>{year}</Title>
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
      drafts: await getPostsDrafts(),
      postsSectioned: await getPostsSectioned(),
      image: await getImage(
        "blog",
        "Personal blog",
        "Here I'll write down my thoughts sometimes",
        "#D9D9D9"
      ),
      branch: branchName(),
    },
  };
}
