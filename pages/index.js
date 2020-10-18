import Head from "next/head";

import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section>
          <h1>Hello There! I'm Alvar Lagerlöf</h1>
          <h2>
            Best described as an 18-year-old Swedish developer who also happens
            to love design, my story starts with a $2 computer from a flea
            market.
          </h2>
          <a href="/about">Learn more about me →</a> or{" "}
          <a href="/contact">Contact me →</a>
        </section>
        <section>
          <h2>Projects</h2>
          <p>
            Featured projects from my{" "}
            <a href="https://github.com/alvarlagerlof">Github →</a>
          </p>
          <ul>
            <li>
              <h3>Formux</h3>
              <p>Exploring automated A/B tests in form design</p>
            </li>
            <li>
              <h3>Quake</h3>
              <p>Spigot plugin for Minecraft modifying it to play Quake</p>
            </li>
            <li>
              <h3>Ball PID</h3>
              <p>Attempting to balance a ball on a plane using two servos</p>
            </li>
            <li>
              <h3>School projects</h3>
              <p>Some coding from school</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Recent blog posts</h2>
          <ul>
            <li>
              <h3>Formux</h3>
              <p>Exploring automated A/B tests in form design</p>
            </li>
            <li>
              <h3>Quake</h3>
              <p>Spigot plugin for Minecraft modifying it to play Quake</p>
            </li>
            <li>
              <h3>Ball PID</h3>
              <p>Attempting to balance a ball on a plane using two servos</p>
            </li>
            <li>
              <h3>School projects</h3>
              <p>Some coding from school</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Reach out</p>
        <ul>
          <li></li>
        </ul>
      </footer>
    </Wrapper>
  );
}
