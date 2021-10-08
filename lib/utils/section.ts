import { Post, Sections } from "types";
import { parseDate } from "./date";

export default function section(posts: Partial<Post>[]): Sections {
  return posts.reduce((acc: Sections, curr: Post) => {
    const year: number = parseDate(curr.date.published).year;

    return {
      ...acc,
      [year]: acc[year] ? [...acc[year], curr] : [curr],
    };
  }, {});
}
