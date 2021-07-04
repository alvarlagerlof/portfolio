import Head from "next/head";
import Script from "next/script";

import Footer from "components/Footer";
import NavBar from "components/NavBar";
import WithDividers from "components/WithDividers";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Next.js complains if this isn't here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Script
        src="/js/script.js"
        data-domain="neurodiversity.wiki"
        strategy="afterInteractive"
      ></Script>

      <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12">
        <div className="w-full xl:w-3/4 max-w-6xl">
          <WithDividers direction="vertical">
            <NavBar />
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
