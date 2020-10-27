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
    <ThemeProvider theme={{ backgroundTop: "white", backgroundBottom: "white", accent: "#6c20b3" }}>
      <Wrapper>
        <Head>
          <title>404 - Alvar Lagerlöf</title>
          <meta name="description" content="Page not found"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <h1>404 Not found</h1>
            <h2>
              Perhaps you want to <CtaLink href="/">go home</CtaLink>
            </h2>
          </Header>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
