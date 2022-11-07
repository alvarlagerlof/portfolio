// lib/config.js

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  basePath: "/studio",
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "alvar.dev",
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === "production",
  plugins: [
    deskTool(),
    codeInput(),
    // "@sanity/base",
    // "@sanity/default-layout",
    // "@sanity/default-login",
    // "@sanity/desk-tool",
    // "@sanity/code-input",
  ],
  env: {
    development: {
      plugins: ["@sanity/vision"],
    },
  },
  schema: {
    types: [
      {
        name: "post",
        title: "Blog post",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
          {
            name: "description",
            title: "Description",
            type: "text",
            rows: 2,
          },
          {
            title: "Dates",
            name: "date",
            type: "object",
            options: {
              collapsible: false,
              collapsed: false,
              columns: 2,
            },
            fields: [
              { name: "published", type: "date", title: "Published" },
              { name: "updated", type: "date", title: "Updated" },
            ],
          },
          {
            title: "Body",
            name: "body",
            type: "array",
            of: [
              {
                type: "block",
                marks: {
                  annotations: [
                    {
                      name: "link",
                      type: "object",
                      title: "link",
                      fields: [
                        {
                          name: "href",
                          type: "url",
                        },
                      ],
                    },
                    {
                      name: "internalLink",
                      type: "object",
                      title: "Internal link",
                      fields: [
                        {
                          name: "reference",
                          type: "reference",
                          title: "Reference",
                          to: [{ type: "post" }],
                        },
                      ],
                    },
                  ],
                },
              },
              {
                type: "code",
              },
              {
                type: "image",
                fields: [
                  {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: {
                      isHighlighted: true, // <-- make this field easily accessible
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "experience",
        title: "Experience",
        type: "document",
        fields: [
          {
            name: "company",
            title: "Company",
            type: "string",
          },
          {
            name: "jobTitle",
            title: "Job title",
            type: "string",
          },

          {
            name: "employmentType",
            title: "Employment type",
            type: "string",
          },
          {
            title: "Dates",
            name: "date",
            type: "object",
            options: {
              collapsible: false,
              collapsed: false,
              columns: 2,
            },
            fields: [
              { name: "start", type: "date", title: "Start" },
              { name: "end", type: "date", title: "End" },
            ],
          },
          {
            title: "Body",
            name: "body",
            type: "array",
            of: [{ type: "block" }],
          },
          {
            name: "link",
            title: "Link",
            type: "url",
          },
        ],
      },
      {
        name: "project",
        title: "Project",
        type: "document",
        fields: [
          {
            name: "name",
            title: "Name",
            type: "string",
          },
          {
            name: "description",
            title: "Description",
            type: "string",
          },
          {
            name: "link",
            title: "Link",
            type: "url",
          },
          {
            name: "featured",
            title: "Featured",
            type: "boolean",
          },
          {
            name: "banner",
            title: "Banner image",
            type: "image",
            fields: [
              {
                name: "caption",
                type: "string",
                title: "Caption",
                options: {
                  isHighlighted: true, // <-- make this field easily accessible
                },
              },
            ],
          },
        ],
      },
      {
        name: "social",
        title: "Social",
        type: "document",
        fields: [
          {
            name: "networkName",
            title: "Network name",
            type: "string",
          },
          {
            name: "userName",
            title: "User name",
            type: "string",
          },
          {
            name: "link",
            title: "Link",
            type: "url",
            validation: Rule =>
              Rule.uri({
                scheme: ["https", "mailto", "tel"],
              }),
          },
          {
            name: "icon",
            title: "Icon",
            type: "image",
            fields: [
              {
                name: "caption",
                type: "string",
                title: "Caption",
                options: {
                  isHighlighted: true, // <-- make this field easily accessible
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
