const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const format = require("xml-formatter");

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  baseUrl: "https://alvar.dev",
  pagesDirectory: "out/",
  targetDirectory: "out/",
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
    const file = fs.readFileSync("out/sitemap.xml", "utf8");

    fs.writeFileSync(
      "out/sitemap.xml",
      format(file, {
        indentation: "  ",
        collapseContent: true,
      })
    );

    console.log("✅ sitemap.xml generated!");
  })
  .catch(e => {
    console.log("❌ sitemap.xml failed to generate");
  });
