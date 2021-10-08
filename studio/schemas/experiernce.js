const experience = {
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
};

export default experience;
