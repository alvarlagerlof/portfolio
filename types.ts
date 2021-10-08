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
  datePublished: string;
  dateUpdated?: string;
  body: string;
};

export interface Sections {
  [year: number]: Post[];
}

export type Experience = SanityDefaults & {
  company: string;
  jobTitle: string;
  employmentType: string;
  start: string;
  end: string;
  link?: string;
  text: string;
};

export type Social = SanityDefaults & {
  networkName: string;
  userName: string;
  link: string;
  icon: SanityImage;
};

export interface Children {
  children: React.ReactNode | string;
}

export type WithChildren<Type> = Type & Children;
