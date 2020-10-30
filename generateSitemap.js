const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const format = require("xml-formatter");

sitemap({
  baseUrl: "https://alvar.dev",
  pagesDirectory: "./out/",
  targetDirectory: "./public/",
  ignoredExtensions: ["jpg", "jpeg", "png", "svg", "ico"],
  extraPaths: ["/"],
  ignoredPaths: ["[fallback]", "404", "globalStyles", "index", "sitemap"],
  pagesConfig: {
    "/": {
      priority: "1",
    },
  },
})
  .then(() => {
    const file = fs.readFileSync("./public/sitemap.xml", "utf8");

    fs.writeFileSync(
      "./public/sitemap.xml",
      format(file, {
        indentation: "  ",
        collapseContent: true,
      })
    );

    console.log("✅ sitemap.xml generated!");
  })
  .catch(e => {
    console.log("❌ sitemap.xml failed to generate: ", e.message);
  });
