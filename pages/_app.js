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
          src="https://stats.alvar.dev/js/index.outbound-links.js"
        ></script>
        {process.env.NODE_ENV == "production" && (
          <script async src="https://arc.io/widget.min.js#oACa1JCN"></script>
        )}
      </Head>
      <GlobalStyle />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
