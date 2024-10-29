"use client";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio v3.
 * All routes under /studio will be handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { studioConfig } from "../../../lib/sanity/studio";

import "../../global.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const NextStudioWithNoSSR = dynamic(
  () => import("next-sanity/studio").then(module => module.NextStudio),
  { ssr: false },
);

export default function StudioPage() {
  return (
    <div className="sanity">
      <Suspense fallback={<div>Loading...</div>}>
        <NextStudioWithNoSSR config={studioConfig} />
      </Suspense>
    </div>
  );
}
