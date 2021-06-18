import Head from "next/head";
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

      <div className="flex flex-col items-center">
        <div className="w-3/4	max-w-6xl">
          <NavBar />
          <main className="space-y-14 my-14">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
