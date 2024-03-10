import { PortableTextBlock } from "@portabletext/types";

interface SanityDefaults {
  _id: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    metadata: {
      lqip: string;
    };
  };
  caption: string;
}

export type Project = SanityDefaults & {
  name: string;
  description: string;
  link: string;
  banner: SanityImage;
  featured: boolean;
};

export type Post = SanityDefaults & {
  slug: SanitySlug;
  title: string;
  description: string;
  date: {
    published: string;
    updated: string;
  } | null;
  body: PortableTextBlock[];
};

export type PostPreview = Exclude<Post, "body">;

export interface Sections {
  [year: number]: Post[];
}

export type Experience = SanityDefaults & {
  company: string;
  jobTitle: string;
  employmentType: string;
  date: {
    start: string;
    end: string;
  };
  link?: string;
  body: PortableTextBlock[];
};

export type Social = SanityDefaults & {
  networkName: string;
  link: string;
  icon: SanityImage;
};

export interface Children {
  children: React.ReactNode | string;
}

export type WithChildren<Type> = Type & Children;
