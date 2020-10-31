import { ThemeProvider } from "styled-components";

import Head from "next/head";

import { getProjects } from "../libs/projects";
import getImage from "../libs/image";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import ItemGrid from "../components/ItemGrid";
import ProjectPreview from "../components/ProjectPreview";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import Section from "../components/Section";
import { Subtitle, Title } from "../components/Headings";

export default function Projects({ image, projects }) {
  return (
    <ThemeProvider
      theme={{
        backgroundTop: "#ffead9",
        backgroundBottom: "#FDFAF7",
        accent: "#297A62",
      }}
    >
      <Wrapper>
        <Head>
          <title>Projects - Alvar Lagerlöf</title>
          <meta name="description" content="Projects from my GitHub I've worked on"></meta>
          <meta property="og:title" content="Projects"></meta>
          <meta property="og:description" content="Stuff from my GitHub I've worked on"></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <Title>Things I've worked on</Title>
            <Subtitle>
              In my free time experiement with things, including everything from game-plugins
              imitating Quake to neural networks. I make it a habit to post these various projects
              on my{" "}
              <CtaLink newTab href="https://github.com/alvarlagerlof">
                Github
              </CtaLink>{" "}
              .
            </Subtitle>
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
