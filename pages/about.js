import styled, { ThemeProvider } from "styled-components";

import Head from "next/head";

import { getExperience } from "../api/experience";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Section from "../components/Section";
import Experience from "../components/Experience";
import CtaLink from "../components/CtaLink";
import Header from "../components/Header";

export default function About({ experience }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#AEBCF9", backgroundBottom: "#F6F7FE", accent: "#AD0B26" }}
    >
      <Wrapper>
        <Head>
          <title>About me - Alvar Lagerlöf</title>
          <meta
            name="description"
            content="What does a $2 computer at a flea market have to do with me writing this? Turns out... everything!"
          ></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <StoryText>
              <img src="/images/profile.jpg" alt="Profile" />
              <h1>Who am I?</h1>
              <p>What does a $2 computer at a flea market have to do with me writing this?</p>
              <p>Turns out... everything!</p>
              <p>
                My story starts with, believe it or not, Minecraft. I was playing it a lot when I
                was younger. Naturally, I wanted to play with friends. But that needed a server (I
                couldn't keep my computer running all the time). So I bought the $2 computer at a
                flea market and installed{" "}
                <CtaLink newTab href="https://ubuntu.com/download/server">
                  Ubuntu Server
                </CtaLink>{" "}
                (a Linux distribution) on it. I have to admit, at first, I was a very bad server
                manager. But I quickly learn the basics of how to keep the machine running and
                (keep) doing what I wanted it to do.
              </p>
              <p>
                Now of course, every proper Minecraft server has a website. So I had to make one
                too. I installed{" "}
                <CtaLink newTab href="https://www.wikiwand.com/en/LAMP_(software_bundle)">
                  LAMP
                </CtaLink>{" "}
                and started reading up on how to code in something called HTML. Quickly,{" "}
                <CtaLink newTab href="https://www.w3schools.com/html/">
                  w3schools.com
                </CtaLink>
                became my guide. Before I knew it, making websites.
              </p>
              <p>
                Then started my wild ride of app development on{" "}
                <CtaLink newTab href="https://github.com/alvarlagerlof/temadagar-android">
                  two
                </CtaLink>{" "}
                different{" "}
                <CtaLink newTab href="https://koda.nu/app">
                  projects
                </CtaLink>
                . So I learned of Java (later Kotlin) and Swift development. One of the apps needed
                offline support with writes, so I implemented a local database using{" "}
                <CtaLink newTab href="https://realm.io/">
                  Realm
                </CtaLink>{" "}
                and worked on syncing with basic time-based diffing. It had around 300 monthly
                active users at its peak (which I thought was crazy).
              </p>
              <p>
                I also experimented with retraining{" "}
                <CtaLink newTab href="http://www.image-net.org/">
                  ImageNet
                </CtaLink>{" "}
                to do what classify things I wanted. Using{" "}
                <CtaLink newTab href="https://ipfs.io/">
                  IFPS
                </CtaLink>{" "}
                as a data source for web apps was also really interesting. Also had some fun with{" "}
                <CtaLink newTab href="https://github.com/alvarlagerlof/ball-pid">
                  trying
                </CtaLink>{" "}
                to make a ball balance on a plate with two servos mounted under it. It and the ML
                stuff was a great opportunity to learn some Python. Somewhere along the way, I got
                briefly back into Minecraft and started to make{" "}
                <CtaLink newTab href="https://dev.bukkit.org/">
                  Bukkit
                </CtaLink>{" "}
                plugins. I{" "}
                <CtaLink newTab href="https://github.com/alvarlagerlof/quake">
                  made
                </CtaLink>{" "}
                a working quake-like shooting game
              </p>
              <p>
                During my journey, I've grown interested in UI and UX design and do now enjoy
                iterating on mockups in Figma before starting to code. In recent years I've worked
                mostly with React, but I've experimented with Vue.js and Svelte and find declarative
                interactive UI as a whole quite interesting.
              </p>
            </StoryText>
          </Header>

          <Section>
            <h2>Experience</h2>
            <p>
              While I’m still in currently in Highschool, I’ve worked professionally on two
              occations.
            </p>

            <ExperienceList>
              {experience.map(data => (
                <Experience key={data.description} data={data} />
              ))}
            </ExperienceList>
          </Section>
        </Main>

        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const ExperienceList = styled.ul`
  margin-top: 32px;

  & > li {
    margin-bottom: 32px;
  }
`;

const StoryText = styled.div`
  & > h1 {
    margin-bottom: 16px;
  }

  & > h2 {
    margin-bottom: 16px;
  }

  & > p + p {
    margin-top: 24px;
  }

  & > img {
    width: 50%;
    float: right;
    border-radius: 8px;
    margin-left: 32px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;

    & > img {
      width: 100%;
    }
  }
`;

export async function getStaticProps() {
  return {
    props: {
      experience: await getExperience(),
    },
  };
}
