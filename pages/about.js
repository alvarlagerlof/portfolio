import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";

export default function About() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - About</title>
      </Head>

      <NavBar />

      <Main>
        <section>
          <h1>About</h1>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}
