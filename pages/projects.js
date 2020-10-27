import { ThemeProvider } from "styled-components";

import Head from "next/head";

import { getProjects } from "../api/projects";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import ItemGrid from "../components/ItemGrid";
import ProjectPreview from "../components/ProjectPreview";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import Section from "../components/Section";
import { getImage } from "../api/image";

export default function Projects({ image, projects }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#D7B498", backgroundBottom: "#FDFAF7", accent: "#297A62" }}
    >
      <Wrapper>
        <Head>
          <title>Projects - Alvar Lagerlöf</title>
          <meta name="description" content="Projects from my GitHub I've worked on"></meta>
          <meta property="og:title" content="Projects"></meta>
          <meta property="og:site_name" content="Alvar Lagerlöf"></meta>
          <meta property="og:image" content={image}></meta>
          <meta name="twitter:card" content="summary"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <h1>Things I've worked on</h1>
            <h2>
              In my free-time I like to work on variuos things, including everything from
              game-plugins imitating Quake to apps. I make it a habit to post these various projects
              on my{" "}
              <CtaLink newTab href="https://github.com/alvarlagerlof">
                Github
              </CtaLink>{" "}
              to let others see what I'm doing.
            </h2>
          </Header>

          <Section>
            <ItemGrid>
              {projects.map(data => (
                <li key={data.title}>
                  <ProjectPreview data={data} />
                </li>
              ))}
            </ItemGrid>
          </Section>
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
      image: await getImage(
        "projects",
        "Projects",
        "Stuff from my GitHub I've worked on",
        "#D7B498"
      ),
    },
  };
}
