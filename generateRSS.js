const fs = require("fs");
const RSS = require("rss");
const matter = require("gray-matter");

try {
  const posts = fs
    .readdirSync(`content/blog`)
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`content/blog/${filename}`).toString();

      const { data } = matter(markdownWithMetadata);

      return {
        ...data,
        slug: filename.replace(".md", ""),
        date: data.date,
      };
    })
    .filter(post => post.draft == false)
    .sort((a, b) => b.date - a.date);

  const feed = new RSS({
    title: "Alvar Lagerlöf's Blog",
    site_url: "https://alvar.dev",
    feed_url: "https://alvar.dev/feed.xml",
    language: "en-us",
  });

  posts.forEach(post => {
    feed.item({
      title: post.title,
      guid: post.slug,
      url: `https://alvar.dev/blog/${post.slug}`,
      date: post.date,
      description: post.description,
      author: "Alvar Lagerlöf",
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("public/feed.xml", rss);

  console.log("✅ feed.xml generated");
} catch (e) {
  console.log("❌ Failed to generate rss: " + e.message);
}
