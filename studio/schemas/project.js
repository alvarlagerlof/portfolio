const project = {
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
};

export default project;
