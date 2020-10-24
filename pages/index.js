import styled from "styled-components";

import { getPosts } from "../api/blog";
import { getProjects } from "../api/projects";

import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import ItemGrid from "../components/ItemGrid";
import ProjectPreview from "../components/ProjectPreview";
import BlogPreview from "../components/BlogPreview";
import Header from "../components/Header";
import Section from "../components/Section";
import CtaLink from "../components/CtaLink";
import CtaLinkGroup from "../components/CtaLinkGroup";
import ClickableLink from "../components/ClickableLink";

export default function Home({ posts, projects }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf</title>
      </Head>

      <NavBar />

      <Main>
        <Header>
          <h1>
            Hello There!
            <br />
            I'm Alvar Lagerlöf
          </h1>
          <h2>
            Best described as an 18 year old Swedish developer who also happens to love design, my
            story starts with a $2 computer from a flea market.
          </h2>
          <CtaLinkGroup>
            <CtaLink href="/about">Learn more about me</CtaLink>
            <CtaLink href="/contact">Contact me</CtaLink>
          </CtaLinkGroup>
        </Header>

        <Feature>
          <ClickableLink href="/projects">
            <h2>Featured projects</h2>{" "}
          </ClickableLink>
          <p>
            View all projects <CtaLink href="/projects">here</CtaLink>
          </p>
          <ItemGrid>
            {projects.map(data => (
              <li key={data.title}>
                <ProjectPreview data={data} />
              </li>
            ))}
          </ItemGrid>
        </Feature>

        <Feature>
          <ClickableLink href="/blog">
            <h2>Latest blog posts</h2>
          </ClickableLink>
          <p>
            Sometimes I try to time to write down my thoughts. View all posts{" "}
            <CtaLink href="/blog">here</CtaLink>
          </p>
          <ItemGrid>
            {posts.map(data => (
              <li key={data.title}>
                <BlogPreview data={data} />
              </li>
            ))}
          </ItemGrid>
        </Feature>
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Feature = styled(Section)`
  & > a {
    margin-bottom: 8px;
  }

  & > p {
    margin-bottom: 32px;
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
