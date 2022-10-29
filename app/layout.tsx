import Footer from "components/Footer";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import WithDividers from "components/WithDividers";
import PlausibleProvider from "next-plausible";

import { Inter } from "@next/font/google";
import localFont from "@next/font/local";

const inter = Inter({
  variable: "--font-inter",
});

const madeDillan = localFont({
  src: "../public/fonts/made-dillan.woff",
  variable: "--font-made-dillan",
});
const spaceText = localFont({
  src: "../public/fonts/space-text-medium.woff",
  variable: "--font-space-text",
});

import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12">
            <div className="w-full xl:w-3/4 max-w-6xl">
              <WithDividers direction="vertical">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </WithDividers>
            </div>
          </div>
        </PlausibleProvider>
      </body>
    </html>
  );
}
