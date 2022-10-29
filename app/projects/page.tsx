import ArrowLink from "components/ArrowLink";
import Meta from "components/Meta";
import WithDividers from "components/WithDividers";
import { Projects } from "./components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Meta title="Projects" description="These are some of the projects I've worked on" />

      <WithDividers direction="vertical">
        <header>
          <h1 className="font-heading text-4xl md:text-7xl mb-4">Projects</h1>
          <h2 className="font-subheading text-xl md:text-2xl">
            You can also check out my socials on the <ArrowLink href="/about">about page</ArrowLink>
          </h2>
        </header>

        <section>
          {/* @ts-ignore */}
          <Projects />
        </section>
      </WithDividers>
    </>
  );
}
