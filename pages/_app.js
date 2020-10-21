import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap&family=Questrial"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
