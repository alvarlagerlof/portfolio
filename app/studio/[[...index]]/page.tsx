"use client";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio v3.
 * All routes under /studio will be handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";

import config from "../../../lib/sanity/config";

import "../../global.css";

export default function StudioPage() {
  return (
    <div className="sanity">
      <NextStudio config={config} />
    </div>
  );
}