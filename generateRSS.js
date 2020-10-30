const fs = require("fs");
const RSS = require("rss");
const matter = require("gray-matter");
const md = require("markdown-it")();

try {
  const posts = fs
    .readdirSync(`content/blog`)
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`content/blog/${filename}`).toString();

      const { data, content } = matter(markdownWithMetadata);

      return {
        ...data,
        content,
        slug: filename.replace(".md", ""),
        published: data.published,
      };
    })
    .filter(post => post.draft == false)
    .sort((a, b) => b.published - a.published);

  const feed = new RSS({
    title: "Alvar Lagerlöf's Blog",
    site_url: "https://alvar.dev",
    feed_url: "https://alvar.dev/feed.xml",
    language: "en-us",
    description: "Developer and designer living in Stockholm",
  });

  posts.forEach(post => {
    const link = `<br/>(This is an article posted to my blog at alvar.dev. You can read it online by <a href="https://alvar.dev/blog/${post.slug}">clicking here</a>.)`;
    const content = md.render(post.content) + link;

    feed.item({
      title: post.title,
      url: `https://alvar.dev/blog/${post.slug}`,
      published: post.published,
      description: post.description,
      author: "Alvar Lagerlöf",
      custom_elements: [{ "content:encoded": content }],
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("out/feed.xml", rss);

  console.log("✅ feed.xml generated");
} catch (e) {
  console.log("❌ Failed to generate rss: " + e.message);
}
