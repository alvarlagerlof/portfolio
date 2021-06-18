import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Separator from "../components/Separator";
import ArrowLink from "../components/ArrowLink";

import { getPostsLatest } from "../libs/blog";
import { getProjectsFeatured } from "../libs/projects";

export default function Home({ posts, projects }) {
  return (
    <>
      <Head>
        <title>Alvar Lagerlöf: Developer and Designer</title>
        <meta
          name="description"
          content="Developer and designer living in Stockholm who likes working with React and Linux"
        ></meta>
        <meta property="og:title" content="Alvar Lagerlöf"></meta>
        <meta
          property="og:description"
          content="Developer and designer living in Stockholm who likes working with React and Linux"
        ></meta>
      </Head>

      <header>
        <h1 className="font-heading text-7xl mb-2">I'm Alvar Lagerlöf</h1>
        <button className="flex flex-row space-x-2 items-center mb-8">
          <span className="text-xl font-bold text-primary ">Hear the pronunciation</span>
          <img alt="speaker" src="/icons/speaker.svg" />
        </button>
        <h2 className="font-subheading text-2xl">
          My story starts with a $2 computer from a flea market.{" "}
          <ArrowLink href="/about">Learn more</ArrowLink>
        </h2>
      </header>

      <Separator />

      <div className="space-x-10 flex flex-row">
        <section className="min-w-[400px]">
          <h3 className="font-heading text-4xl mb-8">Featured projects</h3>
          <ul className="space-y-8">
            {projects.map(({ title, description, link, image }) => (
              <li key={title}>
                <Link href={link ?? ""}>
                  <div className="flex flex-row items-center space-x-4 cursor-pointer">
                    <Image
                      className="bordered rounded-xl object-cover"
                      src={"/content/projects/" + image}
                      width="130"
                      height="80"
                    />
                    <div>
                      <h4 className="text-xl font-subheading font-semibold mb-1">{title}</h4>
                      <p>{description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-2xl font-subheading mt-12">
            <ArrowLink href="/projects">All projects</ArrowLink>
          </h4>
        </section>
        <Separator vertical />
        <section>
          <h3 className="font-heading text-4xl mb-8">Recent blog posts</h3>
          <ul className="space-y-8">
            {posts.map(({ slug, title, description, published, draft }) => (
              <li key={title}>
                <Link href={"/blog" + slug}>
                  <div className="cursor-pointer">
                    <h4 className="text-xl font-subheading font-semibold mb-1">{title}</h4>
                    <p>{description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-2xl font-subheading mt-12">
            <ArrowLink href="/blog">All posts</ArrowLink>
          </h4>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjectsFeatured(),
      posts: await getPostsLatest(),
    },
  };
}
