import Head from "next/head";

import { getProjects } from "../../api/projects";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import ItemGrid from "../../components/ItemGrid";
import ProjectPreview from "../../components/ProjectPreview";
import Header from "../../components/Header";
import CtaLink from "../../components/CtaLink";
import Section from "../../components/Section";

export default function Projects({ projects }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Projects</title>
      </Head>

      <NavBar />

      <Main>
        <Header>
          <h1>Things I've worked on</h1>
          <h2>
            In my free-time I like to work on variuos things, including everything from game-plugins
            imitating Quake to apps. I make it a habit to post these various projects on my{" "}
            <CtaLink href="https://github.com/alvarlagerlof">Github</CtaLink> to let others see what
            I'm doing.
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
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}
