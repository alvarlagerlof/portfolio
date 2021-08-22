import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#16a34a"></meta>

          <link rel="icon" href="/favicons/favicon.ico"></link>
          <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16"></link>
          <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32"></link>
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-192x192.png"
            sizes="192x192"
          ></link>

          <meta name="monetization" content="$ilp.uphold.com/yGGixMZQUePn"></meta>
          <script defer data-domain="alvar.dev" src="/js/script.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
