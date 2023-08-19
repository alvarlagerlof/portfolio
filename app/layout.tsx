import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import Script from "next/script";
import { HighlightInit } from "@highlight-run/next/client";

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

export const revalidate = 600;

export const metadata: Metadata = {
  openGraph: {
    siteName: "alvar.dev",
  },
  twitter: {
    site: "@alvarlagerlof",
    creator: "@alvarlagerlof",
    card: "summary_large_image",
  },
  icons: [
    {
      url: "/favicons/favicon.ico",
    },
    {
      url: "/favicons/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      url: "/favicons/favicon-192x192.png",
      sizes: "192x192",
    },
  ],
  themeColor: "#16a34a",
  alternates: {
    types: {
      "application/rss+xml": "https://alvar.dev/feed.xml",
    },
  },
  metadataBase: new URL("https://alvar.dev"),
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <HighlightInit
        projectId={process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      />

      <html lang="en" className={`${inter.className} ${madeDillan.variable} ${spaceText.variable}`}>
        <body>
          {children}
          <Script defer data-domain="alvar.dev" src="/js/script.outbound-links.js"></Script>
        </body>
      </html>
    </>
  );
}
