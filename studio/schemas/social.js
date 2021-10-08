const social = {
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
};

export default social;
