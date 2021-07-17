import { promises } from "fs";
import matter from "gray-matter";

import { parseDate } from "./utils/date";

import { Post, Sections } from "../types";

async function getPost(slug: string): Promise<Post> {
  const files = await promises.readdir(`./content/blog`);
  const filename = files.find(filename => filename.replace(".md", "") == slug);

  const fileContent = await promises.readFile(`./content/blog/${filename}`);

  const m = matter(fileContent.toString());

  const post: Post = {
    ...(m.data as Post),
    slug: filename.replace(".md", ""),
    content: m.content,
  };

  return post;
}

async function getPosts(): Promise<Post[]> {
  const filesNames = await promises.readdir("./content/blog");

  return await Promise.all(
    filesNames.map<Promise<Post>>(async (filename: string) => {
      const fileContent = await promises.readFile(`./content/blog/${filename}`);
      const m = matter(fileContent.toString());

      const post: Post = {
        ...(m.data as Post),
        content: m.content,
        slug: filename.replace(".md", ""),
      };
      return post;
    })
  ).then(posts =>
    posts.sort((a: Post, b: Post) => b.date.published.localeCompare(a.date.published))
  );
}

async function getPostsDrafts(): Promise<Post[]> {
  const all = await getPosts();
  const filtered = all.filter(post => post.draft == true);
  return filtered;
}

async function getPostsPublished(): Promise<Post[]> {
  const all = await getPosts();
  const filterd = all.filter(post => post.draft == false);
  return filterd;
}

async function getPostsLatest() {
  const published = await getPostsPublished();
  //published.length = 6;
  const fewer = published.slice(0, 6);
  return fewer;
}

async function getPostsSectioned(): Promise<Sections> {
  const published = await getPostsPublished();

  return published.reduce((acc: Sections, curr: Post) => {
    const year: number = parseDate(curr.date.published).year;

    if (acc[year]) {
      const sections: Sections = {
        ...acc,
        [year]: [...acc[year], curr],
      };

      return sections;
    } else {
      const sections: Sections = {
        ...acc,
        [year]: [curr],
      };

      return sections;
    }
  }, {});
}

export { getPosts, getPostsPublished, getPostsDrafts, getPostsLatest, getPostsSectioned, getPost };
