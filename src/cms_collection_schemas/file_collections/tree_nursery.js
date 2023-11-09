import { pageCard } from "../common_fields/page_card";

export const treeNurseryPageSchema = {
  label: "Tree Nursery Page",
  name: "tree_nursery_page",
  file: "src/content/treeNursery/tree_nursery_page.md",
  fields: [
    {
      label: "Page Meta Title",
      name: "page_meta_title",
      widget: "string",
    },
    pageCard,
    {
      label: "Hero",
      name: "hero",
      widget: "list",
      summary: "{{fields.center}}",
      collapsed: true,
      fields: [
        { label: "Top", name: "top", widget: "string" },
        { label: "Center", name: "center", widget: "string" },
        { label: "Bottom", name: "bottom", widget: "string" },
        { label: "Image", name: "image", widget: "image" },
        { label: "Image Alt", name: "image_alt", widget: "string" },
      ],
    },
    {
      label: "Our Trees",
      name: "our_trees",
      widget: "object",
      summary: "Our Trees Content",
      collapsed: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Trees List",
          name: "trees_list",
          widget: "list",
          summary: "{{fields.tree}}",
          field: { label: "Tree", name: "tree", widget: "string" },
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
        {
          label: "Image Alt",
          name: "image_alt",
          widget: "string",
        },
        { label: "Button Text", name: "button_text", widget: "string" },
        { label: "Button link", name: "button_link", widget: "string" },
      ],
    },
    {
      label: "Goals",
      name: "goals",
      widget: "object",
      summary: "Goals Content",
      collapsed: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Goals List",
          name: "list",
          widget: "list",
          field: { label: "Item", name: "item", widget: "string" },
        },
        { label: "Read More Text", name: "read_more_text", widget: "string" },
        { label: "Read More link", name: "read_more_link", widget: "string" },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
        {
          label: "Image Alt",
          name: "image_alt",
          widget: "string",
        },
        { label: "Button Text", name: "button_text", widget: "string" },
        { label: "Button link", name: "button_link", widget: "string" },
      ],
    },
    {
      label: "CTA Center",
      name: "cta_center",
      widget: "object",
      collapsed: true,
      summary: "CTA Center Content",
      fields: [
        {
          label: "Button Text",
          name: "button_text",
          widget: "string",
        },
        {
          label: "Button Link",
          name: "button_link",
          widget: "string",
        },
      ],
    },
  ],
};
