import fs from "fs";
import matter from "gray-matter";

async function getProjects() {
  const files = fs.readdirSync(`./content/projects`);

  return files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`./content/projects/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    return {
      ...data,
    };
  });
}

async function getProjectsFeatured() {
  return (await getProjects()).filter(project => project.featured);
}

export { getProjects, getProjectsFeatured };
