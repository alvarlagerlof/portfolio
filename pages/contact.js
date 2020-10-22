import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";

export default function Contact() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Contact</title>
      </Head>

      <NavBar />

      <Main>
        <section>
          <h1>Contact</h1>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}
