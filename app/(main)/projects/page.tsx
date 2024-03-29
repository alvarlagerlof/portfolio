import { ArrowLink } from "components/ArrowLink";
import { WithDividers } from "components/WithDividers";
import { Projects } from "./components/Projects";

export const metadata = {
  title: "Projects",
  description: "These are some of the projects I've worked on",
};

export default function ProjectsPage() {
  return (
    <WithDividers direction="vertical">
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">Projects</h1>
        <h2 className="font-subheading text-xl md:text-2xl">
          You can also find all my repos on{" "}
          <ArrowLink newTab href="https://github.com/alvarlagerlof/">
            GitHub
          </ArrowLink>
        </h2>
      </header>

      <section>
        <Projects />
      </section>
    </WithDividers>
  );
}
