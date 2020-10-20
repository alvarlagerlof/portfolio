import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

import formatDate from "../../utils/formatDate";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";

export default function Blog({ posts }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Blog</title>
      </Head>

      <Nav />

      <Main>
        <section>
          <h1>Blog</h1>

          {posts.map(({ slug, frontmatter: { title, description, date } }) => (
            <article key={title}>
              <header>
                <h3>
                  <a href={"/blog/" + slug}>{title}</a>
                </h3>
                <span>{date}</span>
              </header>
              <section>
                <p>{description}</p>
              </section>
            </article>
          ))}
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`./content/blog`);

  const posts = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
      date: formatDate(data.date),
      updatedAt: formatDate(data.updatedAt),
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
