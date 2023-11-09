import { pageCard } from "../../common_fields/page_card";

export const theFincaFields = [
  {
    label: "Page Meta Title",
    name: "page_meta_title",
    widget: "string",
  },
  {
    label: "Title",
    name: "title",
    widget: "string",
  },
  pageCard,
  {
    label: "Hero",
    name: "hero",
    widget: "object",
    collapsed: true,
    summary: "Hero content",
    fields: [
      {
        label: "Main Title",
        name: "main_title",
        widget: "string",
      },
      {
        label: "Main Title Image",
        name: "main_title_image",
        widget: "image",
      },
      {
        label: "Main Title Image Alt",
        name: "main_title_image_alt",
        widget: "string",
      },
      {
        label: "h2 Title",
        name: "h2_title",
        widget: "string",
      },
      {
        label: "h2 Title Image",
        name: "h2_title_image",
        widget: "image",
      },
      {
        label: "h2 Title Image Alt",
        name: "h2_title_image_alt",
        widget: "string",
      },
      {
        label: "h3 Title",
        name: "h3_title",
        widget: "string",
      },
      {
        label: "h3 Title Image",
        name: "h3_title_image",
        widget: "image",
      },
      {
        label: "h3 Title Image Alt",
        name: "h3_title_image_alt",
        widget: "string",
      },
      {
        label: "h4 Title",
        name: "h4_title",
        widget: "string",
      },
      {
        label: "h4 Title Image",
        name: "h4_title_image",
        widget: "image",
      },
      {
        label: "h4 Title Image Alt",
        name: "h4_title_image_alt",
        widget: "string",
      },
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
    label: "Relevance",
    name: "relevance",
    widget: "object",
    summary: "Relevance Content",
    collapsed: true,
    fields: [
      { label: "Title", name: "title", widget: "string" },
      { label: "Subtitle", name: "subtitle", widget: "string" },
      {
        label: "Relevance List",
        name: "list",
        widget: "list",
        field: { label: "item", name: "item", widget: "string" },
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
  {
    label: "Location",
    name: "location",
    widget: "object",
    collapsed: true,
    summary: "Location Content",
    fields: [
      { label: "Title", name: "title", widget: "string" },
      { label: "Subtitle 1", name: "subtitle_1", widget: "string" },
      { label: "Paragraph 1", name: "paragraph_1", widget: "markdown" },
      { label: "Subtitle 2", name: "subtitle_2", widget: "string" },
      { label: "Paragraph 2", name: "paragraph_2", widget: "markdown" },
    ],
  },
  {
    label: "The Finca Story",
    name: "the_finca_story",
    widget: "object",
    collapsed: true,
    summary: "The Finca Story Content",
    fields: [
      { label: "Title", name: "title", widget: "string" },
      { label: "Subtitle 1", name: "subtitle_1", widget: "string" },
      { label: "Paragraph 1", name: "paragraph_1", widget: "markdown" },
      { label: "Subtitle 2", name: "subtitle_2", widget: "string" },
      { label: "Paragraph 2", name: "paragraph_2", widget: "markdown" },
      { label: "Image", name: "image", widget: "image" },
      { label: "Image Alt", name: "image_alt", widget: "string" },
    ],
  },
  {
    label: "CTA Bottom",
    name: "cta_bottom",
    widget: "object",
    collapsed: true,
    summary: "CTA Bottom Content",
    fields: [
      {
        label: "Button 1 Text",
        name: "button_1_text",
        widget: "string",
      },
      {
        label: "Button 1 Link",
        name: "button_1_link",
        widget: "string",
      },
      {
        label: "Button 2 Text",
        name: "button_2_text",
        widget: "string",
      },
      {
        label: "Button 2 Link",
        name: "button_2_link",
        widget: "string",
      },
    ],
  },
];
