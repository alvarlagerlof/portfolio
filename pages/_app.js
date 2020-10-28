import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="preload"
          href="/fonts/Inter-roman.var.woff2?v=3.15"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="/fonts/Inter-italic.var.woff2?v=3.15"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="/fonts/Pt-Serif-regular-latin.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        /> */}
        <meta name="theme-color" content="#ffffff"></meta>

        <script
          async
          defer
          data-domain="alvar.dev"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <GlobalStyle />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
