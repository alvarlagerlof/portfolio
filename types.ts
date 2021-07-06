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
  date: {
    published: string;
    updated?: string;
  };
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
  date: {
    start: string;
    end: string;
  };
  link?: string;
  content: string;
};

type Children = {
  children: React.ReactNode | string;
};

type WithChildren<Type> = Type & Children;

export type { Project, Post, Experience, Sections, Children, WithChildren };
