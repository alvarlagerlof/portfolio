import { Post, Sections } from "types";

export default function section(posts: Partial<Post>[]): Sections {
  return posts.reduce((acc: Sections, curr: Post) => {
    const year: number = new Date(curr.date.published).getFullYear();

    return {
      ...acc,
      [year]: acc[year] ? [...acc[year], curr] : [curr],
    };
  }, {});
}
