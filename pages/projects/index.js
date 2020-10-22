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

export default function Projects({ projects }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Projects</title>
      </Head>

      <NavBar />

      <Main>
        <Header>
          <h1>Projects</h1>
          <h2>
            These are some of my projects on{" "}
            <CtaLink href="https://github.com/alvarlagerlof">Github</CtaLink>
          </h2>
        </Header>

        <section>
          <ItemGrid>
            {projects.map(data => (
              <ProjectPreview key={data.title} data={data} />
            ))}
          </ItemGrid>
        </section>
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
