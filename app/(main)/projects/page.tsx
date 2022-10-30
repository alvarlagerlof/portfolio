import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import { Projects } from "./components/Projects";

export default function ProjectsPage() {
  return (
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
  );
}
