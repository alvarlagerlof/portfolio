// const RSS = require("rss");
// const md = require("markdown-it")();
// const promises = require("fs").promises;

// const { getPostsPublished } = require("./blog");

import RSS from "rss";
import marked from "marked";
import { promises } from "fs";

import { getPostsPublished } from "./blog";

async function generate() {
  try {
    const posts = await getPostsPublished();

    const feed = new RSS({
      title: "Alvar Lagerlöf's Blog",
      site_url: "https://alvar.dev",
      feed_url: "https://alvar.dev/feed.xml",
      language: "en-us",
      description: "Developer and designer living in Stockholm",
    });

    posts.forEach(post => {
      const link = `<br/>(This is an article posted to my blog at alvar.dev. You can read it online by <a href="https://alvar.dev/blog/${post.slug}">clicking here</a>.)`;
      const content = marked(post.content) + link;

      feed.item({
        title: post.title,
        url: `https://alvar.dev/blog/${post.slug}`,
        description: post.description,
        author: "Alvar Lagerlöf",
        custom_elements: [{ "content:encoded": content }],
      });
    });

    const rss = feed.xml({ indent: true });
    await promises.writeFile("./public/feed.xml", rss);

    console.log("✅ feed.xml generated");
  } catch (e) {
    console.log("❌ Failed to generate rss: " + e.message);
  }
}

generate();
