import RSS from "rss";
import { promises } from "fs";
import groq from "groq";
import blocksToHtml from "@sanity/block-content-to-html";

import { Post } from "types";
import { getClient } from "./sanity/sanity.server";

async function generate() {
  try {
    const posts: Post[] = await getClient(false).fetch(
      groq`
        *[_type == "post" && defined(slug)] {
          slug,
          title,
          description,
          body
        }
      `
    );

    const feed = new RSS({
      title: "Alvar Lagerlöf's Blog",
      site_url: "https://alvar.dev",
      feed_url: "https://alvar.dev/feed.xml",
      language: "en-us",
      description: "Developer and designer living in Stockholm",
    });

    posts.forEach(post => {
      const link = `<br/>(This is an article posted to my blog at alvar.dev. You can read it online by <a href="https://alvar.dev/blog/${post.slug.current}">clicking here</a>.)`;
      const content =
        blocksToHtml({
          blocks: post.body,
        }) + link;

      console.log(post.title);

      feed.item({
        title: post.title,
        url: `https://alvar.dev/blog/${post.slug.current}`,
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
