import { Inter } from "@next/font/google";
import localFont from "@next/font/local";
import { AnalyticsWrapper } from "components/Analytics";
import { Meta } from "components/Meta";
import PlausibleProvider from "next-plausible";

import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const madeDillan = localFont({
  src: "./fonts/made-dillan.woff",
  variable: "--font-made-dillan",
});

const spaceText = localFont({
  src: "./fonts/space-text-medium.woff",
  variable: "--font-space-text",
});

export const revalidate = 60;

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.className} ${madeDillan.variable} ${spaceText.variable}`}>
      <head>
        <Meta title="Alvar Lagerlöf" description="Developer and designer from Stockholm" />

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

        <meta name="monetization" content="$ilp.uphold.com/yGGixMZQUePn"></meta>
      </head>

      <body>
        <PlausibleProvider domain="alvar.dev" customDomain="alvar.dev" trackOutboundLinks>
          {children}
          <AnalyticsWrapper />
        </PlausibleProvider>
      </body>
    </html>
  );
}
