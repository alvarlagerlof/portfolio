import Head from "next/head";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";

export default function About() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - About</title>
      </Head>

      <Nav />

      <Main>
        <section>
          <h1>About</h1>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}
