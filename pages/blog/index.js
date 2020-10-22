import Head from "next/head";
const { DateTime } = require("luxon");

import { getPosts } from "../../api/blog";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import BlogPreview from "../../components/BlogPreview";

export default function Blog({ postsSectioned }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Blog</title>
      </Head>

      <NavBar />

      <Main>
        <section>
          <h1>Blog</h1>

          <ul>
            {Object.entries(postsSectioned).map(([year, posts]) => (
              <Year year={year} posts={posts} />
            ))}
          </ul>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

function Year({ year, posts }) {
  return (
    <li>
      <h3>{year}</h3>
      {posts.map(post => {
        <BlogPreview key={post.title} data={post} />;
      })}
    </li>
  );
}

export async function getStaticProps() {
  const sectionByYear = posts => {
    return posts.reduce((acc = {}, curr) => {
      console.log(curr.date);
      const year = DateTime.fromISO(curr.date).year;
      console.log(year);

      return {
        [year]: [...(acc[year] ? acc[year] : []), curr],
      };
    });
  };

  return {
    props: {
      postsSectioned: sectionByYear(await getPosts()),
    },
  };
}
