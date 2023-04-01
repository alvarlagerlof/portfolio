import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";

import { config } from "./config";

export const studioConfig = defineConfig({
  basePath: "/studio",
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "alvar.dev",
  plugins: [deskTool(), codeInput()],
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
