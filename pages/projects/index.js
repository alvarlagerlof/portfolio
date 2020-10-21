import Head from "next/head";

import { getProjects } from "../../api/projects";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";

export default function Projects({ projects }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Projects</title>
      </Head>

      <Nav />

      <Main>
        <section>
          <h1>Projects</h1>

          <ul>
            {projects.map(({ title, description, link }) => (
              <a key={title} href={link} target="_blank">
                <li>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </li>
              </a>
            ))}
          </ul>
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
