import styled from "styled-components";

import Head from "next/head";
import Link from "next/link";

import { getPosts } from "../api/blog";
import { getProjects } from "../api/projects";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import PageLink from "../components/CtaLink";
import ClickableLink from "../components/ClickableLink";

export default function Home({ posts, projects }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf</title>
      </Head>

      <Nav />

      <Main>
        <Header>
          <HeaderTitle>
            Hello There!
            <br />
            I'm Alvar Lagerlöf
          </HeaderTitle>
          <HeaderText>
            Best described as an 18-year-old Swedish developer who also happens to love design, my
            story starts with a $2 computer from a flea market.
          </HeaderText>
          <HeaderButtons>
            <PageLink href="/about">Learn more about me →</PageLink> or{" "}
            <PageLink href="/contact">Contact me →</PageLink>
          </HeaderButtons>
        </Header>
        <ContentFeature>
          <h2>Projects</h2>
          <p>
            Featured projects from my{" "}
            <PageLink href="https://github.com/alvarlagerlof">Github →</PageLink>
          </p>
          <FeatureGrid>
            {projects.map(({ title, description, link }) => (
              <FeatureItem key={title}>
                <ClickableLink href={link} target="_blank">
                  <h3>{title}</h3>
                </ClickableLink>
                <p>{description}</p>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </ContentFeature>
        <ContentFeature>
          <h2>Recent blog posts</h2>
          <p>Sometimes I try taking time to write down my thoughs</p>
          <FeatureGrid>
            {posts.map(({ slug, title, description, date }) => (
              <FeatureItem key={title}>
                <ClickableLink href={"/blog/" + slug}>
                  <h3>{title}</h3>
                </ClickableLink>
                <p>{description}</p>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </ContentFeature>
      </Main>

      <Footer />
    </Wrapper>
  );
}

const HeaderTitle = styled.h1`
  margin-bottom: 16px;
`;

const HeaderText = styled.h2`
  max-width: 50ch;
  margin-bottom: 32px;
  font-weight: 400;
`;

const HeaderButtons = styled.div`
  font-size: 1.2rem;
`;

const Header = styled.header`
  margin: 64px 0;
`;

const Section = styled.section`
  margin: 64px 0;
`;

const ContentFeature = styled(Section)`
  & > h2 {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  & > p {
    margin-bottom: 32px;
  }
`;

const FeatureGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 16px;
  list-style-type: none;
`;

const FeatureItem = styled.li`
  & > a {
    margin-bottom: 4px;
  }
  & > a > h3 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
      posts: await getPosts(),
    },
  };
}
