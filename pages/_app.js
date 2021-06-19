import Head from "next/head";
import Script from "next/script";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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

      <div className="flex flex-col items-center mx-6 md:mx-8">
        <div className="w-full xl:w-3/4 max-w-6xl  ">
          <NavBar />
          <main className="space-y-8 my-8 md:space-y-14 md:my-14">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
