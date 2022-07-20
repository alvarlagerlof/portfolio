import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import groq from "groq";

import { Post, Project } from "types";

import { getClient } from "lib/sanity/sanity.server";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Meta from "components/Meta";
import NextSanityImage from "components/SanityImage";

type HomeProps = {
  projects: Project[];
  posts: Post[];
};

const postsQuery = groq`
*[_type == "post"] | order(date.published desc) [0..3] {
  _id,
  slug,
  title,
  description,
  "date": {
    published,
    updated
  }
}
`;

const projectsQuery = groq`
*[_type == "project" && featured == true] [0..3] {
  _id,
  name,
  description,
  link,
  banner
}
`;

export default function Home({ projects, posts }: HomeProps) {
  return (
    <>
      <Meta title="Alvar Lagerlöf" description="Developer and designer from Stockholm" />

      <WithDividers direction="vertical">
        <Header />
        <WithDividers direction="horizontal">
          <SectionFeaturedProjects projects={projects} />
          <SectionRecentBlogPosts posts={posts} />
        </WithDividers>
      </WithDividers>
    </>
  );
}

function Header() {
  const audioRef = useRef(null);

  const play = () => {
    audioRef.current.play();
  };

  return (
    <header>
      <h1 className="font-heading text-4xl md:text-7xl mb-4">I'm Alvar Lagerlöf</h1>
      <button className="flex flex-row space-x-2 items-center mb-8" onClick={play}>
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Image alt="Speaker" src="/icons/speaker.svg" width="24" height="24" />
      </button>

      <audio ref={audioRef} aria-hidden>
        <source src="/name.flac" type="audio/flac" />
        Your browser does not support the audio element.
      </audio>

      <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch]">
        A developer and designer. My story starts with a $2 computer from a flea market.{" "}
        <ArrowLink href="/about">Learn more</ArrowLink>
      </h2>
    </header>
  );
}

function SectionFeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="md:min-w-[400px]">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
      <ul className="space-y-6 md:space-y-8">
        {projects.map(project => (
          <ProjectItem project={project} key={project._id} />
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/projects">All projects</ArrowLink>
      </h4>
    </section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const link = useRef(null);

  return (
    <li
      onClick={e => {
        if (link.current !== e.target) {
          link.current.click();
        }
      }}
      className="flex md:flex-row items-start sm:items-center space-x-4 cursor-pointer"
    >
      <div className="min-w-[120px]">
        <NextSanityImage
          image={project.banner}
          className="bordered rounded-xl object-cover"
          width="120"
          height="75"
        />
      </div>
      <div className="-m-1">
        <h4 className="text-xl font-subheading font-semibold break-all mb-1">
          <Link href={project.link ?? "#"} passHref>
            <a target={project.link ? "_blank" : "_self"} ref={link} rel="noreferrer">
              {project.name}{" "}
            </a>
          </Link>
        </h4>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

type SectionRecentBlogPosts = {
  posts: Post[];
};

function SectionRecentBlogPosts({ posts }: SectionRecentBlogPosts) {
  return (
    <section>
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Recent blog posts</h3>
      <ul className="space-y-4 md:space-y-8">
        {posts.map(post => (
          <BlogPostItem post={post} key={post._id} />
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/blog">All posts</ArrowLink>
      </h4>
    </section>
  );
}

function BlogPostItem({ post }: { post: Post }) {
  const link = useRef(null);

  return (
    <li
      onClick={e => {
        if (link.current !== e.target) {
          link.current.click();
        }
      }}
      className="cursor-pointer"
    >
      <h4 className="text-xl font-subheading font-semibold mb-1">
        <Link href={`/blog/${post.slug?.current}`} passHref>
          <a ref={link}>{post.title}</a>
        </Link>
      </h4>
      <p>{post.description}</p>
    </li>
  );
}

export async function getStaticProps() {
  const featuredProjects: Project[] = await getClient().fetch(projectsQuery);
  const latestPosts: Partial<Post>[] = await getClient().fetch(postsQuery);

  return {
    props: {
      projects: featuredProjects,
      posts: latestPosts,
    },
  };
}
