"use client";

import { NextStudio } from "next-sanity/studio";
import { studioConfig } from "../../../lib/sanity/studio";

export function Studio() {
  return <NextStudio config={studioConfig} />;
}
