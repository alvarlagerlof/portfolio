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
import { Heading, Title, Subtitle, Subheading } from "../components/Headings";

export default function About({ image, experience }) {
  return (
    <ThemeProvider
      theme={{
        backgroundTop: "#dee4ff",
        backgroundBottom: "#F6F7FE",
        accent: "#AD0B26",
      }}
    >
      <Wrapper>
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
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <Title>Who am I?</Title>
            <Subtitle>
              What does a $2 computer at a flea market have to do with me writing this? Turns out...
              everything!
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
              My story starts with, believe it or not, Minecraft. I was playing it a lot when I was
              younger. Naturally, I wanted to play with friends. I bought the $2 computer at a flea
              market and installed <em>Ubuntu Server</em> on it. Now of course, every proper
              Minecraft server has a website. So I installed <em>LAMP</em> and started reading up on
              how to code in something called HTML. Quickly, <em>w3schools.com</em> became my guide.
              Before I knew it, making websites.
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
              offline support with writes, so I implemented a local database using <em>Realm</em>{" "}
              and worked on syncing with basic time-based diffing.
            </p>
            <p>
              I also experimented with retraining <em>ImageNet</em> to do what classify things I
              wanted. Using <em>IFPS</em> as a data source for web apps was also really interesting.
              Also had some fun with{" "}
              <CtaLink newTab href="https://github.com/alvarlagerlof/ball-pid">
                trying
              </CtaLink>{" "}
              to make a ball balance on a plate with two servos mounted under it. Somewhere along
              the way, I got briefly back into Minecraft and started to make <em>Bukkit</em>{" "}
              plugins. I{" "}
              <CtaLink newTab href="https://github.com/alvarlagerlof/quake">
                made
              </CtaLink>{" "}
              a working Quake-like FPS in <em>Java.</em>
            </p>
            <p>
              During my journey, I've grown interested in UI and UX design and do now enjoy
              iterating on mockups in Figma before starting to code. In recent years I've worked
              mostly with <em>React</em>, but I've experimented with <em>Vue.js</em> and{" "}
              <em>Svelte</em> and find declarative interactive UI as a whole quite interesting.
            </p>
            <p>
              When I'm not coding or designing, I like to take{" "}
              <CtaLink href="https://unsplash.com/@alvarlagerlof">photos</CtaLink> and I have also
              experimented with rendering some cool{" "}
              <CtaLink href="https://www.artstation.com/alvarlagerlof">things</CtaLink> in{" "}
              <em>Blender</em>.
            </p>
          </StoryText>

          <Section>
            <Heading>Experience</Heading>
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
