export const treesSchema = {
  name: "trees",
  label: "Tree Species",
  label_singular: "Tree",
  folder: "src/content/trees/",
  create: true,
  delete: true,
  fields: [
    { name: "title", widget: "string", label: "Post Title" },
    {
      name: "name",
      widget: "string",
      label: "Name",
    },
    {
      label: "Other Names",
      name: "other_names",
      widget: "list",
      summary: "{{fields.name}}",
      field: { label: "name", name: "name", widget: "string" },
    },
  ],
};
