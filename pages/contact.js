import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Contact</title>
      </Head>

      <NavBar />

      <Main>
        <Section>
          <h1>Reach out</h1>
        </Section>
      </Main>

      <Footer />
    </Wrapper>
  );
}
