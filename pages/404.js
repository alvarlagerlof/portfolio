import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import { Subtitle, Title } from "../components/Headings";

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 - Alvar Lagerlöf</title>
        <meta property="og:title" content="404"></meta>
        <meta property="og:description" content="Page not found"></meta>
        <meta property="og:image" content="https://alvar.dev/opengraph.jpg"></meta>
      </Head>

      <Wrapper>
        <NavBar />

        <Main>
          <Header>
            <Title>404 Not found</Title>
            <Subtitle>
              Perhaps you want to <CtaLink href="/">go home</CtaLink>
            </Subtitle>
          </Header>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}
