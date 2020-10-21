import fs from "fs";
import matter from "gray-matter";

import formatDate from "./utils/formatDate";

async function getPost(slug) {
  const files = fs.readdirSync(`./content/blog`);

  const filename = files.find(filename => filename.replace(".md", "") == slug);

  const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    content,
    data: {
      ...data,
      date: formatDate(data.date),
      updatedAt: formatDate(data.updatedAt),
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
      date: formatDate(data.date),
    };
  });
}

export { getPosts, getPost };
