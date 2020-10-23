import styled from "styled-components";

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
        <Header>
          <h1>About me</h1>
        </Header>
        <article>
          <p>What does a $2 computer at a flea market have to do with me writing this?</p>
          <p>In my case, turns out, everything! </p>
          <p>
            Proin ligula ipsum, rutrum ut tellus in, venenatis vestibulum elit. Donec a sagittis
            augue. Nullam at molestie eros. Aliquam quis neque varius, facilisis erat sagittis,
            cursus lacus. Curabitur nec libero turpis. Sed ut nibh justo. Sed eu dictum ex. Proin
            semper a tellus non hendrerit. Mauris malesuada pellentesque lacinia.
          </p>
        </article>
      </Main>

      <Footer />
    </Wrapper>
  );
}

const Header = styled.header`
  margin-bottom: 32px;
`;
