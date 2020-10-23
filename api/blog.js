import fs from "fs";
import matter from "gray-matter";

import { formatDate, parseDate } from "./utils/date";

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

async function getPosts() {
  return fs
    .readdirSync(`./content/blog`)
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

      const { data } = matter(markdownWithMetadata);

      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        description: data.description,
        date: data.date.getTime(),
      };
    })
    .sort((a, b) => b.date - a.date);
}

async function getPostsSectioned() {
  const posts = await getPosts();

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

export { getPosts, getPostsSectioned, getPost };
