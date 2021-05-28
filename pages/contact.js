import { ThemeProvider } from "styled-components";

import Head from "next/head";

import getImage from "../libs/image";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import { Subtitle, Title } from "../components/Headings";

export default function Contact({ image }) {
  return (
    <>
      <Head>
        <title>Contact me - Alvar Lagerlöf</title>
        <meta name="description" content="Reach me at hello@alvar.dev"></meta>
        <meta property="og:title" content="Contact me"></meta>
        <meta property="og:description" content="Reach me at hello@alvar.dev"></meta>
        <meta property="og:image" content={"https://alvar.dev" + image}></meta>
      </Head>

      <ThemeProvider
        theme={{
          backgroundTop: "#e7fadc",
          backgroundBottom: "#F5FFF6",
          accent: "#5455B0",
        }}
      >
        <Wrapper>
          <Head>
            <title>Contact me - Alvar Lagerlöf</title>
            <meta name="description" content="Reach me at hello@alvar.dev"></meta>
            <meta property="og:title" content="Contact me"></meta>
            <meta property="og:description" content="Reach me at hello@alvar.dev"></meta>
            <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          </Head>

          <NavBar />

          <Main>
            <Header>
              <Title>Want to talk?</Title>
              <Subtitle>
                Feel free to contact me! You can send me a message on{" "}
                <CtaLink newTab href="https://linkedin.com/in/alvarlagerlof">
                  LinkedIn
                </CtaLink>
                , a DM on{" "}
                <CtaLink newTab href="https://twitter.com/alvarlagerlof">
                  Twitter
                </CtaLink>{" "}
                or an email to{" "}
                <CtaLink newTab href="mailto:hello@alvar.dev">
                  hello@alvar.dev
                </CtaLink>
              </Subtitle>
            </Header>
          </Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      image: await getImage("contact", "Contact me", "Reach me at hello@alvar.dev", "#9ADBA1"),
    },
  };
}
