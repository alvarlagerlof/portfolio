import styled, { ThemeProvider } from "styled-components";

import Head from "next/head";
import Image from "next/image";

import getExperience from "../libs/experience";
import getImage from "../libs/image";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Section from "../components/Section";
import Experience from "../components/Experience";
import CtaLink from "../components/CtaLink";
import Header from "../components/Header";
import { Heading, Title, Subtitle } from "../components/Headings";

export default function About({ image, experience }) {
  return (
    <>
      <Head>
        <title>About me - Alvar Lagerlöf</title>
        <meta
          name="description"
          content="What does a $2 computer at a flea market have to do with me writing this? Turns out... everything!"
        ></meta>
        <meta property="og:title" content="About me"></meta>
        <meta
          property="og:description"
          content="What does a $2 computer at a flea market have to do with me writing this? Turns out... everything!"
        ></meta>
        <meta property="og:image" content={"https://alvar.dev" + image}></meta>
      </Head>

      <ThemeProvider
        theme={{
          backgroundTop: "#dee4ff",
          backgroundBottom: "#F6F7FE",
          accent: "#AD0B26",
        }}
      >
        <Wrapper>
          <NavBar />

          <Main>
            <Header>
              <Title>My story</Title>
              <Subtitle>
                What does a $2 computer at a flea market have to do with me writing this? Turns
                out... everything!
              </Subtitle>
            </Header>
            <StoryText>
              {/* <ImageContainer>
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  priority
                  loading="eager"
                  width={5408}
                  height={4000}
                />
              </ImageContainer> */}

              <p>
                My story starts with, believe it or not, Minecraft. I was playing it a lot when I
                was 13. Naturally, I wanted to play with friends. I bought the $2 computer at a flea
                market and installed Ubuntu Server on it. Now of course, every proper Minecraft
                server has a website. So I installed LAMP and started reading up on how to code in
                something called HTML. Quickly, w3schools.com became my guide. Before I knew it, I
                was making websites.
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
                . I learned Java (and later Kotlin) and Swift development. One of the apps needed
                offline support with writes, so I implemented a local database using Realm and
                worked on syncing with basic time-based diffing.
              </p>
              <p>
                Some years later I started experimenting with retraining ImageNet to do what
                classify things I wanted. Using IFPS as a data source for web apps was also really
                interesting. Also had some fun with trying to make a{" "}
                <CtaLink newTab href="https://github.com/alvarlagerlof/ball-pid">
                  ball balance
                </CtaLink>{" "}
                on a plate with two servos mounted under it. Somewhere along the way, I got briefly
                back into Minecraft and started to make Bukkit plugins. I made a working Quake-like{" "}
                <CtaLink newTab href="https://github.com/alvarlagerlof/quake">
                  FPS
                </CtaLink>{" "}
                in Java.
              </p>
              <p>
                During my journey, I've grown interested in UI and UX design and do now enjoy
                iterating on mockups in Figma before starting to code. In recent years I've worked
                mostly with React, but I've also tried Vue.js and Svelte and find declarative
                interactive UI as a whole quite interesting.
              </p>
              <p>
                When I'm not coding or designing, I like to take{" "}
                <CtaLink href="https://unsplash.com/@alvarlagerlof">photos</CtaLink> or experiment
                with rendering some{" "}
                <CtaLink href="https://www.artstation.com/alvarlagerlof">cool things</CtaLink> in
                Blender.
              </p>
            </StoryText>

            <Section>
              <Heading>Experience</Heading>
              <p>I'm still young, byt I’ve worked professionally on two occations.</p>

              <ExperienceList>
                {experience.map(data => (
                  <Experience key={data.title + data.company} data={data} />
                ))}
              </ExperienceList>
            </Section>
          </Main>

          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

const ImageContainer = styled.div`
  float: right;
  margin-left: 32px;
  margin-bottom: 32px;
  width: 50%;

  & img {
    object-fit: cover;
    border-radius: 8px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const StoryText = styled.div`
  & > p + p {
    margin-top: 24px;
  }

  & h4 {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const ExperienceList = styled.ul`
  margin-top: 32px;

  & > li {
    margin-bottom: 32px;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      experience: await getExperience(),
      image: await getImage(
        "about",
        "About me",
        "What does a $2 computer at a flea market have to do with me writing this? Turns out... everything!",
        "#AEBCF9"
      ),
    },
  };
}
