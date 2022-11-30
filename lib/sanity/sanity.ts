import { definePreview } from "next-sanity/preview";
import createImageUrlBuilder from "@sanity/image-url";

import { projectId, dataset } from "./api";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = source => createImageUrlBuilder({ projectId, dataset }).image(source);

// Set up the live preview subscription hook
export const usePreview = definePreview({ projectId, dataset });
