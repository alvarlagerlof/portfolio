import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ffffff"></meta>

          <link rel="icon" href="/favicons/favicon.ico"></link>
          <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16"></link>
          <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32"></link>
          <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96"></link>
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-192x192.png"
            sizes="192x192"
          ></link>

          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta property="og:image" content="https://alvar.dev/opengraph.jpg"></meta>
          <meta name="monetization" content="$ilp.uphold.com/yGGixMZQUePn"></meta>

          <script defer data-domain="neurodiversity.wiki" src="/js/script.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
