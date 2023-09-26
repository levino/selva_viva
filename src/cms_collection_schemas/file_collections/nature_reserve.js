export const natureReserveSchema = {
  label: "Nature Reserve Page",
  name: "nature_reserve_page",
  file: "src/content/natureReserve/nature_reserve.md",
  fields: [
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
          label: "h2 Title",
          name: "h2_title",
          widget: "string",
        },
        {
          label: "h3 Title",
          name: "h3_title",
          widget: "string",
        },
        {
          label: "h4 Title",
          name: "h4_title",
          widget: "string",
        },
        { label: "Hero Image", name: "hero_image", widget: "image" },
        { label: "Hero Image Alt", name: "hero_image_alt", widget: "string" },
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
          name: "relevance_list",
          widget: "list",
          field: { label: "item", name: "item", widget: "string" },
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
      label: "CTA Center",
      name: "cta_center",
      widget: "object",
      collapsed: true,
      summary: "CTA Center Content",
      fields: [
        {
          label: "CTA Button Text",
          name: "cta_button_text",
          widget: "string",
        },
        {
          label: "CTA Button Link",
          name: "cta_button_link",
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
        { label: "subtitle_1", name: "subtitle_1", widget: "string" },
        { label: "paragraph_1", name: "paragraph_1", widget: "markdown" },
        { label: "subtitle_2", name: "subtitle_2", widget: "string" },
        { label: "paragraph_2", name: "paragraph_2", widget: "markdown" },
      ],
    },
    {
      label: "Reserve Story",
      name: "reserve story",
      widget: "object",
      collapsed: true,
      summary: "Reserve Story Content",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "subtitle_1", name: "subtitle_1", widget: "string" },
        { label: "paragraph_1", name: "paragraph_1", widget: "markdown" },
        { label: "subtitle_2", name: "subtitle_2", widget: "string" },
        { label: "paragraph_2", name: "paragraph_2", widget: "markdown" },
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
          label: "CTA Button 1 Text",
          name: "cta_butto_1_text",
          widget: "string",
        },
        {
          label: "CTA Button 1 Link",
          name: "cta_button_1_link",
          widget: "string",
        },
        {
          label: "CTA Button 2 Text",
          name: "cta_butto_2_text",
          widget: "string",
        },
        {
          label: "CTA Button 2 Link",
          name: "cta_button_2_link",
          widget: "string",
        },
      ],
    },
  ],
};
