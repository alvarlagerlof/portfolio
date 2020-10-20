import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import formatDate from "../../utils/formatDate";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";

export default function BlogPost({ content, data: { title, description, date } }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Blog</title>
      </Head>

      <Nav />

      <Main>
        <header>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <h4>{date}</h4>
        </header>

        <article>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync(`./content/blog`);

  const filename = files.find(filename => filename.replace(".md", "") == slug);

  const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

  const { data, content } = matter(markdownWithMetadata);

  const frontmatter = {
    content,
    data: {
      ...data,
      date: formatDate(data.date),
      updatedAt: formatDate(data.updatedAt),
    },
  };

  return {
    props: {
      ...frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`./content/blog`);

  return {
    paths: files
      .map(filename => filename.replace(".md", ""))
      .map(slug => ({
        params: {
          slug,
        },
      })),
    fallback: false,
  };
}
