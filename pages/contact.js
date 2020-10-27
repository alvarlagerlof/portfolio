import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import { ThemeProvider } from "styled-components";

export default function Contact() {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#9ADBA1", backgroundBottom: "#F5FFF6", accent: "#5455B0" }}
    >
      <Wrapper>
        <Head>
          <title>Contact me - Alvar Lagerlöf</title>
          <meta name="description" content="Reach me at hi@alvar.dev"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <h1>Want to talk?</h1>
            <h2>
              I'm reachable in multple ways. You can send me a message on{" "}
              <CtaLink newTab href="https://linkedin.com/in/alvarlagerlof">
                LinkedIn
              </CtaLink>
              , a DM on{" "}
              <CtaLink newTab href="https://twitter.com/alvarlagerlof">
                Twitter
              </CtaLink>{" "}
              or an email to{" "}
              <CtaLink newTab href="mailto:hi@alvar.dev">
                hi@alvar.dev
              </CtaLink>
            </h2>
          </Header>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
