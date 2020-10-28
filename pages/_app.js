import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin></link>
        <link rel="preconnect" href="https://rsms.me/" crossorigin></link>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400&display=swap&"
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
