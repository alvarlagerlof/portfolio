type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  blurhash: string;
  featured: boolean;
};

type Post = {
  slug?: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
  draft: boolean;
  content: string;
};

type Sections = {
  [year: number]: Post[];
};

type Experience = {
  title: string;
  company: string;
  type: "Part-time" | "Full-time" | "Internship";
  startDate: string;
  endDate: string;
  link?: string;
  content: string;
};

export type { Project, Post, Experience, Sections };
