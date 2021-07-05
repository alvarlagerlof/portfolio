import { promises } from "fs";
import matter from "gray-matter";
import { Project } from "types";

async function getProjects(): Promise<Project[]> {
  const files = await promises.readdir(`./content/projects`);

  return Promise.all(
    files.map<Promise<Project>>(async filename => {
      const fileContent = await promises.readFile(`./content/projects/${filename}`);
      const project = matter(fileContent.toString()).data as Project;
      return project;
    })
  );
}

async function getProjectsFeatured() {
  const projects = await getProjects();
  const featued = projects.filter(project => project.featured == true);
  return featued;
}

export { getProjects, getProjectsFeatured };
