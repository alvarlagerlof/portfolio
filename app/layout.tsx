import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata, Viewport } from "next";
import Script from "next/script";

import { VercelToolbar } from "@vercel/toolbar/next";

import "./global.css";
import { draftMode } from "next/headers";

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

export default function RootLayout({ children }: React.PropsWithChildren) {
  const { isEnabled } = draftMode();

  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en" className={`${inter.className} ${madeDillan.variable} ${spaceText.variable}`}>
      <body>
        {isEnabled ? <p>draft mode</p> : <p>not draft mode</p>}
        {shouldInjectToolbar && <VercelToolbar />}
        {children}
        <Script defer data-domain="alvar.dev" src="/js/script.outbound-links.js"></Script>
      </body>
    </html>
  );
}
