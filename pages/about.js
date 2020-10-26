import styled, { ThemeProvider } from "styled-components";

import Head from "next/head";

import { getExperience } from "../api/experience";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Section from "../components/Section";

import Experience from "../components/Experience";

export default function About({ experience }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#F6F7FE", backgroundBottom: "#CBD4FB", accent: "#AD0B26" }}
    >
      <Wrapper>
        <Head>
          <title>Alvar Lagerlöf - About</title>
        </Head>

        <NavBar />

        <Main>
          <Split>
            <CustomHeader>
              <h1>About me</h1>
              <Text>
                <p>What does a $2 computer at a flea market have to do with me writing this?</p>
                <p>In my case, turns out, everything!</p>
                <p>
                  Proin ligula ipsum, rutrum ut tellus in, venenatis vestibulum elit. Donec a
                  sagittis augue. Nullam at molestie eros. Aliquam quis neque varius, facilisis erat
                  sagittis, cursus lacus. Curabitur nec libero turpis. Sed ut nibh justo. Sed eu
                  dictum ex. Proin semper a tellus non hendrerit. Mauris malesuada pellentesque
                  lacinia.
                </p>
              </Text>
            </CustomHeader>
            <img src="/images/profile.jpg" alt="Profile" />
          </Split>

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
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Split = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & > img {
    width: 50%;
    object-fit: cover;
    margin-left: 64px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;

    & > img {
      width: 100%;
      margin-left: unset;
      margin-bottom: 64px;
    }
  }
`;

const CustomHeader = styled.header`
  & > h1 {
    margin-bottom: 16px;
  }
`;

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
