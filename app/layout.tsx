import { Inter } from "@next/font/google";
import localFont from "@next/font/local";
import { Metadata } from "next";
// import { AnalyticsWrapper } from "components/Analytics";
import Script from "next/script";

import "./global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const madeDillan = localFont({
  src: "../assets/fonts/made-dillan.woff",
  variable: "--font-made-dillan",
});

const spaceText = localFont({
  src: "../assets/fonts/space-text-medium.woff",
  variable: "--font-space-text",
});

export const revalidate = 120;

export const metadata: Metadata = {
  openGraph: {
    siteName: "alvar.dev",
  },
  twitter: {
    site: "@alvarlagerlof",
    creator: "@alvarlagerlof",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.className} ${madeDillan.variable} ${spaceText.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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

        <Script defer data-domain="alvar.dev" src="/js/script.outbound-links.js"></Script>
      </head>

      <body>
        {children}
        {/* <AnalyticsWrapper /> */}
      </body>
    </html>
  );
}
