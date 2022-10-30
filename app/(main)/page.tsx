import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";
import Pronunciation from "./components/Pronunciation";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { RecentBlogPosts } from "./components/RecentBlogPosts";

export default function IndexPage() {
  return (
    <WithDividers direction="vertical">
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">I'm Alvar Lagerlöf</h1>
        <Pronunciation />

        <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch]">
          A developer and designer. My story starts with a $2 computer from a flea market.{" "}
          <ArrowLink href="/about">Learn more</ArrowLink>
        </h2>
      </header>

      <WithDividers direction="horizontal">
        <FeaturedProjects />
        <RecentBlogPosts />
      </WithDividers>
    </WithDividers>
  );
}
