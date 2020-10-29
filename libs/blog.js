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
      date: data.date.getTime(),
      updatedAt: data.updatedAt != undefined ?? data.updatedAt.getTime(),
    },
  };
}

async function getPosts(published) {
  return fs
    .readdirSync(`./content/blog`)
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

      const { data } = matter(markdownWithMetadata);

      return {
        ...data,
        slug: filename.replace(".md", ""),
        date: data.date.getTime(),
      };
    })
    .filter(post => (published === undefined ? true : post.draft != published))
    .sort((a, b) => b.date - a.date);
}

async function getDrafts() {
  return await getPosts(false);
}

async function getLatest() {
  const allPublished = await getPosts(true);
  allPublished.length == 6;
  return allPublished;
}

async function getPostsSectioned() {
  const posts = await getPosts(true);

  return posts.reduce((acc, curr) => {
    const year = parseDate(curr.date).year;

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

export { getPosts, getDrafts, getLatest, getPostsSectioned, getPost };
