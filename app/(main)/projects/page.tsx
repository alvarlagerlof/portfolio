import { ArrowLink } from "components/ArrowLink";
import { SetTitle } from "components/SetTitle";
import { WithDividers } from "components/WithDividers";

import { Projects } from "./components/Projects";

export default function ProjectsPage() {
  return (
    <WithDividers direction="vertical">
      <SetTitle to="Projects" />
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
        {/* @ts-ignore */}
        <Projects />
      </section>
    </WithDividers>
  );
}
