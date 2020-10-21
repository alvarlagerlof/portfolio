import Head from "next/head";
import Link from "next/link";

import { getPosts } from "../api/blog";
import { getProjects } from "../api/projects";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";

export default function Home({ posts, projects }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf</title>
      </Head>

      <Nav />

      <Main>
        <section>
          <h1>Hello There! I'm Alvar Lagerlöf</h1>
          <h2>
            Best described as an 18-year-old Swedish developer who also happens to love design, my
            story starts with a $2 computer from a flea market.
          </h2>
          <a href="/about">Learn more about me →</a> or <a href="/contact">Contact me →</a>
        </section>
        <section>
          <h2>Projects</h2>
          <p>
            Featured projects from my <a href="https://github.com/alvarlagerlof">Github →</a>
          </p>
          <ul>
            {projects.map(({ title, description, link }) => (
              <a key={title} href={link} target="_blank">
                <li>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </li>
              </a>
            ))}
          </ul>
        </section>
        <section>
          <h2>Recent blog posts</h2>
          <ul>
            {posts.map(({ slug, title, description, date }) => (
              <Link href={"/blog/" + slug} key={title}>
                <li>
                  <h2>{title}</h2>
                  <h3>{date}</h3>
                  <p>{description}</p>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
      posts: await getPosts(),
    },
  };
}
