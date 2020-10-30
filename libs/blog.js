import fs from "fs";
import matter from "gray-matter";

import { parseDate } from "./utils/date";

async function getPost(slug) {
  const filename = fs
    .readdirSync(`./content/blog`)
    .find(filename => filename.replace(".md", "") == slug);

  const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    content,
    data: {
      ...data,
      published: data.published.getTime(),
      updated: data.updated ? data.updated.getTime() : null,
    },
  };
}

async function getPosts() {
  return fs
    .readdirSync(`./content/blog`)
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

      const { data } = matter(markdownWithMetadata);

      return {
        ...data,
        slug: filename.replace(".md", ""),
        published: data.published.getTime(),
        updated: data.updated ? data.updated.getTime() : null,
      };
    })
    .sort((a, b) => b.published - a.published);
}

async function getPostsDrafts() {
  return await (await getPosts()).filter(post => post.draft == true);
}

async function getPostsPublished() {
  return await (await getPosts()).filter(post => post.draft == false);
}

async function getPostsLatest() {
  const allPublished = await getPostsPublished();
  allPublished.length == 6;
  return allPublished;
}

async function getPostsSectioned() {
  const posts = await getPostsPublished();

  return posts.reduce((acc, curr) => {
    const year = parseDate(curr.published).year;

    if (acc[year]) {
      return {
        ...acc,
        [year]: [...acc[year], curr],
      };
    } else {
      return {
        ...acc,
        [year]: [curr],
      };
    }
  }, {});
}

export { getPosts, getPostsPublished, getPostsDrafts, getPostsLatest, getPostsSectioned, getPost };
