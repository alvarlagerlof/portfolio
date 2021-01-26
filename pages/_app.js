import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
        <script
          async
          defer
          data-domain="alvar.dev"
          src="https://plausible.io/js/plausible.outbound-links.js"
        ></script>
      </Head>
      <GlobalStyle />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
