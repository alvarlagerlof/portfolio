import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Section from "../components/Section";

export default function About() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - About</title>
      </Head>

      <NavBar />

      <Main>
        <Section>
          <h1>About me</h1>
        </Section>
      </Main>

      <Footer />
    </Wrapper>
  );
}
