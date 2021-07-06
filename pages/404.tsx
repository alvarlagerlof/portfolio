import Head from "next/head";
import ArrowLink from "components/ArrowLink";

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 - Alvar Lagerlöf</title>
        <meta name="description" content="Page not found"></meta>
        <meta property="og:title" content="404"></meta>
        <meta property="og:description" content="Page not found"></meta>
      </Head>

      <header>
        <h1 className="font-heading text-7xl mb-4">404</h1>

        <h2 className="font-subheading text-2xl">
          Page not found. Go <ArrowLink href="/">home</ArrowLink>
        </h2>
      </header>
    </>
  );
}
