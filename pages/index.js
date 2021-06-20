import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

import Separator from "../components/Separator";
import ArrowLink from "../components/ArrowLink";

import { getPostsLatest } from "../libs/blog";
import { getProjectsFeatured } from "../libs/projects";

export default function Home({ posts, projects }) {
  const audioRef = useRef(null);

  const play = () => {
    console.log(audioRef.current);
    audioRef.current.play();
  };

  return (
    <>
      <Head>
        <title>Alvar Lagerlöf: Developer and Designer</title>
        <meta name="description" content="Developer and designer living in Stockholm "></meta>
        <meta property="og:title" content="Alvar Lagerlöf"></meta>
        <meta property="og:description" content="Developer and designer living in Stockholm"></meta>
      </Head>

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

      <Separator />

      <div className="space-y-8 md:space-y-14 xl:space-x-14 xl:space-y-0 flex flex-col xl:flex-row">
        <section className="md:min-w-[400px]">
          <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
          <ul className="space-y-4 md:space-y-8">
            {projects.map(({ title, description, link, image }) => (
              <li key={title}>
                <Link href={link ?? "#"}>
                  <a className="flex flex-row items-center space-x-4 cursor-pointer">
                    <Image
                      className="bordered rounded-xl object-cover"
                      src={"/content/projects/" + image}
                      width="130"
                      height="80"
                      alt="Project banner"
                    />
                    <div>
                      <h4 className="text-xl font-subheading font-semibold break-all mb-1">
                        {title}
                      </h4>
                      <p>{description}</p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-xl font-subheading mt-12">
            <ArrowLink href="/projects">All projects</ArrowLink>
          </h4>
        </section>

        <Separator verticalAt="xl" />

        <section>
          <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Recent blog posts</h3>
          <ul className="space-y-4 md:space-y-8">
            {posts.map(({ slug, title, description, published, draft }) => (
              <li key={title}>
                <Link href={"/blog/" + slug}>
                  <a>
                    <h4 className="text-xl font-subheading font-semibold  break-all mb-1">
                      {title}
                    </h4>
                    <p>{description}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-xl font-subheading mt-12">
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
