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
      name: "start",
      title: "Start date",
      type: "date",
    },
    {
      name: "end",
      title: "End date",
      type: "date",
    },
    {
      title: "Body",
      name: "text",
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
