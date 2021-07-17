import Head from "next/head";
import Script from "next/script";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import WithDividers from "components/WithDividers";

import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Next.js complains if this isn't here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12">
        <div className="w-full xl:w-3/4 max-w-6xl">
          <WithDividers direction="vertical">
            <Navbar />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </WithDividers>
        </div>
      </div>
    </>
  );
}

export default MyApp;
