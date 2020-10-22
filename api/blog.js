import fs from "fs";
import matter from "gray-matter";

import { formatDate } from "./utils/date";

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
      updatedAt: data.updatedAt.getTime(),
    },
  };
}

async function getPosts() {
  const files = fs.readdirSync(`./content/blog`);

  return files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      description: data.description,
      date: data.date.getTime(),
    };
  });
}

async function getPostsSectioned() {
  const posts = await getPosts();

  return posts.reduce((acc, curr) => {
    const year = formatDate(curr.date).year;

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
