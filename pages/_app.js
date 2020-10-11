import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alvar Lagerlöf</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
