import styled from "styled-components";

import Head from "next/head";

import { getExperience } from "../api/experience";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Section from "../components/Main";
import CtaLink from "../components/CtaLink";
import CtaLinkGroup from "../components/CtaLinkGroup";
import Experience from "../components/Experience";
import Header from "../components/Header";

export default function About({ experience }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - About</title>
      </Head>

      <NavBar />

      <Main>
        <Section>
          <Header>
            <h1>About me</h1>
          </Header>
          <Text>
            <p>What does a $2 computer at a flea market have to do with me writing this?</p>
            <p>In my case, turns out, everything! </p>
            <p>
              Proin ligula ipsum, rutrum ut tellus in, venenatis vestibulum elit. Donec a sagittis
              augue. Nullam at molestie eros. Aliquam quis neque varius, facilisis erat sagittis,
              cursus lacus. Curabitur nec libero turpis. Sed ut nibh justo. Sed eu dictum ex. Proin
              semper a tellus non hendrerit. Mauris malesuada pellentesque lacinia.
            </p>
          </Text>
        </Section>
        <Section>
          <Text>
            <h2>Work experience</h2>
            <p>
              While I’m still in currently in Highschool, I’ve worked professionally on two
              occations.
            </p>

            <ExperienceList>
              {experience.map(data => (
                <Experience key={data.description} data={data} />
              ))}
            </ExperienceList>
          </Text>
        </Section>

        <Section>
          <Text>
            <h2>What I do in my free-time</h2>
            <p>I like to dabble in code and these are some of the thingss I've worked on</p>
          </Text>
          <CtaLinkGroup>
            <CtaLink href="/projects">View projects</CtaLink>
          </CtaLinkGroup>
        </Section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

const ExperienceList = styled.ul`
  margin-top: 32px;

  & > li {
    margin-bottom: 32px;
  }
`;

const Text = styled.div`
  & h2 {
    margin-bottom: 8px;
  }

  & > p + p {
    margin-top: 16px;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      experience: await getExperience(),
    },
  };
}
