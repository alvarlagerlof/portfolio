import { ArrowLink } from "components/ArrowLink";

export default function BlogPostFoundNotPage() {
  return (
    <header>
      <h1 className="font-heading text-7xl mb-4">404</h1>

      <h2 className="font-subheading text-2xl">
        Blog post not found. You can find all blog posts <ArrowLink href="/">here</ArrowLink>
      </h2>
    </header>
  );
}
