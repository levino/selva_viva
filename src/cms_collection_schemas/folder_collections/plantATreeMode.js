export const plantAtreeModesSchema = {
  name: "plant_a_tree_modalities",
  label: "Plant a tree modalities",
  label_singular: "Modality",
  folder: "src/content/plantATree/",
  identifier_field: "name",
  create: true,
  delete: true,
  fields: [
    { name: "title", widget: "string", label: "Title" },
    {
      name: "page_title",
      widget: "string",
      label: "Page Title",
    },
    {
      name: "bg_image",
      widget: "image",
      label: "Bg Image",
    },
    {
      name: "bg_alt",
      widget: "string",
      label: "Bg Alt",
    },
    {
      name: "subtitle",
      widget: "string",
      label: "Subtitle",
    },
    {
      name: "excerpt",
      widget: "markdown",
      label: "Excerpt",
    },
    { name: "description_title", widget: "string", label: "Description Title" },
    {
      name: "description",
      widget: "markdown",
      label: "Description",
    },
    {
      name: "what_you_get",
      label: "What you get",
      widget: "object",
      fields: [
        { name: "title", label: "Title", widget: "string" },
        {
          label: "List Items",
          name: "list_items",
          widget: "list",
          summary: "{{fields.name}}",
          field: { label: "Item", name: "item", widget: "string" },
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
        },
      ],
    },
    {
      name: "button_text",
      widget: "string",
      label: "Button Text",
    },
    {
      name: "back_button_text",
      widget: "string",
      label: "Back Button Text",
    },
    {
      name: "cover_image",
      label: "Cover Image",
      widget: "image",
    },
    { name: "cover_alt", label: "Cover Alt", widget: "string" },
  ],
};
