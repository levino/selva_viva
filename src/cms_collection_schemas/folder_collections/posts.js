export const postsSchema = {
  name: "posts",
  label: "Blog Posts",
  label_singular: "Blog Post",
  folder: "src/content/blog/",
  create: true,
  delete: true,
  fields: [
    { name: "title", widget: "string", label: "Post Title" },
    {
      name: "publish_date",
      widget: "datetime",
      format: "DD MMM YYYY",
      date_format: "DD MMM YYYY",
      time_format: false,
      label: "Publish Date",
    },
    {
      name: "cover_image",
      widget: "image",
      label: "Cover Image",
    },
    {
      name: "cover_alt",
      widget: "string",
      label: "Cover Alt",
    },
    {
      name: "subtitle",
      widget: "string",
      label: "Subtitle",
    },
    {
      name: "excerpt",
      widget: "text",
      label: "Excerpt",
      required: false,
    },
    { name: "body", widget: "markdown", label: "Post Body" },
  ],
};
