import ArrowLink from "components/ArrowLink";
import Meta from "components/Meta";

export default function Page404() {
  return (
    <>
      <Meta title="404" description="Page not found" />

      <header>
        <h1 className="font-heading text-7xl mb-4">404</h1>

        <h2 className="font-subheading text-2xl">
          Page not found. Please go <ArrowLink href="/">home</ArrowLink>
        </h2>
      </header>
    </>
  );
}
