import { promises } from "fs";
import matter from "gray-matter";

import { Experience } from "../types";

export default async function getExperience(): Promise<Experience[]> {
  const files = await promises.readdir(`./content/experience`);

  return Promise.all(
    files.map<Promise<Experience>>(async filename => {
      const fileContent = await promises.readFile(`./content/experience/${filename}`);

      const m = matter(fileContent.toString());

      const experience: Experience = {
        ...(m.data as Experience),
        content: m.content,
      };

      return experience;
    })
  ).then(experience =>
    experience.sort((a: Experience, b: Experience) => b.date.start.localeCompare(a.date.start))
  );

  return;
}
