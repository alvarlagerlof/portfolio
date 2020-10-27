import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import { ThemeProvider } from "styled-components";
import { getImage } from "../api/image";

export default function Contact({ image }) {
  return (
    <ThemeProvider
      theme={{ backgroundTop: "#9ADBA1", backgroundBottom: "#F5FFF6", accent: "#5455B0" }}
    >
      <Wrapper>
        <Head>
          <title>Contact me - Alvar Lagerlöf</title>
          <meta name="description" content="Reach me at hi@alvar.dev"></meta>
          <meta property="og:title" content="Contact me"></meta>
          <meta property="og:description" content="Reach me at hi@alvar.dev"></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
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

export async function getStaticProps() {
  return {
    props: {
      image: await getImage("contact", "Contact me", "Reach me at hi@alvar.dev", "#9ADBA1"),
    },
  };
}
