import { createClient } from "next-sanity";
import { config } from "./config";
import { draftMode } from "next/headers";

export const sanityClient = createClient(config);

export function createSanityClientWithDraftMode() {
  const client = createClient(config);

  const { isEnabled } = draftMode();

  if (!isEnabled) {
    return client;
  }

  if (!process.env.SANITY_READ_TOKEN) {
    console.log("No read token found, not using draft mode");
    return client;
  }

  return client.withConfig({
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    token: process.env.SANITY_READ_TOKEN,
    perspective: "previewDrafts",
  });
}
