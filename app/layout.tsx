import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata, Viewport } from "next";
import Script from "next/script";

import "./global.css";
import { DraftIndicator } from "./DraftIndicator";
import { Suspense, lazy } from "react";

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

export const viewport: Viewport = {
  themeColor: "#16a34a",
};

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
  alternates: {
    types: {
      "application/rss+xml": "https://alvar.dev/feed.xml",
    },
  },
  metadataBase: new URL("https://alvar.dev"),
};

const RscDevtoolsPanel = lazy(() =>
  import("@rsc-parser/embedded").then(module => ({
    default: module.RscDevtoolsPanel,
  })),
);

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.className} ${madeDillan.variable} ${spaceText.variable}`}>
      <body>
        <DraftIndicator />
        {children}
        <Script defer data-domain="alvar.dev" src="/js/script.outbound-links.js"></Script>
        {process.env.NODE_ENV === "development" ||
        process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ? (
          <Suspense>
            <RscDevtoolsPanel />
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
