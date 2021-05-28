import Head from "next/head";
import "../globalStyles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Next.js complains if this isn't here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
