import Head from "next/head";

import GlobalStyle from "./globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
