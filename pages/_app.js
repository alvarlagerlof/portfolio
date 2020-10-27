import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap&"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
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
