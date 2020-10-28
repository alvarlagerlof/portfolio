import fs from "fs";
import matter from "gray-matter";

async function getExperience() {
  return fs
    .readdirSync(`./content/experience`)
    .map(filename => {
      const markdownWithMetadata = fs.readFileSync(`./content/experience/${filename}`).toString();

      const { data, content } = matter(markdownWithMetadata);

      return {
        ...data,
        content,
        startDate: data.startDate.getTime(),
        endDate: data.endDate.getTime(),
      };
    })
    .sort((a, b) => b.date - a.date);
}

export { getExperience };
