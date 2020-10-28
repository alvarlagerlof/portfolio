import styled, { ThemeProvider } from "styled-components";

import { getPosts } from "../libs/blog";
import { getProjects } from "../libs/projects";

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
import { getImage } from "../libs/image";

export default function Home({ image, posts, projects }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#FFC2C2", backgroundBottom: "#FFF5F5", accent: "#6938B7" }}
    >
      <Wrapper>
        <Head>
          <title>Alvar Lagerlöf: Developer and Designer</title>
          <meta
            name="description"
            content="Developer and designer living in Stockholm who likes working with React and Linux"
          ></meta>
          <meta property="og:title" content="Alvar Lagerlöf"></meta>
          <meta
            property="og:description"
            content="Developer and designer living in Stockholm who likes working with React and Linux"
          ></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <h1>Hello there!</h1>
            <h2>
              I'm Alvar Lagerlöf. Best described as an 18 year old Swedish developer who also
              designs. I love to work with React. My story starts with a $2 computer from a flea
              market. <CtaLink href="/about">Learn more</CtaLink>
            </h2>

            <h2>
              Love to work with: React, Redux, Next.js, styled-components, TypeScript, Node, Kotlin,
              Swift, Linux, Docker, Firebase, Figma
            </h2>

            <h2>
              Want to reach out? <CtaLink href="/contact">Contact me</CtaLink>
            </h2>
          </Header>

          <Feature>
            <h2>Featured projects</h2>{" "}
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
            <h2>Latest blog posts</h2>
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
    </ThemeProvider>
  );
}

const Feature = styled(Section)`
  & > a {
    margin-bottom: 8px;
  }

  & > p {
    margin-bottom: 32px;
    max-width: 45ch;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
      posts: await getPosts(),
      image: await getImage(
        "home",
        "Alvar Lagerlöf",
        "Developer and designer living in Stockholm who likes working with React and Linux",
        "#FFC2C2"
      ),
    },
  };
}
