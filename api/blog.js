import fs from "fs";
import matter from "gray-matter";

async function getPost(slug) {
  const files = fs.readdirSync(`./content/blog`);

  const filename = files.find(filename => filename.replace(".md", "") == slug);

  const markdownWithMetadata = fs.readFileSync(`./content/blog/${filename}`).toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    content,
    data,
    // data: {
    //   ...data,
    //   date: Date.parse(data.date).getTime(),
    //   updatedAt: Date.parse(data.updatedAt).getTime(),
    // },
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
      date: data.date,
    };
  });
}

export { getPosts, getPost };
