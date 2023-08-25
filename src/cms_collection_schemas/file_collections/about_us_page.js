export const aboutUsPageSchema = {
  label: "About Us Page",
  name: "about_us_page",
  file: "src/content/aboutUsPage/about_us_page.md",
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
      label: "Subtitle",
      name: "subtitle",
      widget: "string",
    },
    {
      label: "Excerpt",
      name: "excerpt",
      widget: "text",
    },
    { label: "Hero Image", name: "hero_image", widget: "image" },
    {
      label: "Hero Button",
      name: "hero_button",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        {
          label: "Hero Button text",
          name: "hero_button_text",
          widget: "string",
        },
        {
          label: "Hero Button link",
          name: "hero_button_link",
          widget: "string",
        },
      ],
    },
    {
      label: "Vision",
      name: "vision",
      summary: "{{fields.name}}",
      widget: "object",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Subtitle",
          name: "subtitle",
          widget: "string",
        },
        {
          label: "Description",
          name: "description",
          widget: "markdown",
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
      ],
    },
    {
      label: "How all started",
      name: "how_all_started",
      summary: "{{fields.name}}",
      widget: "object",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Subtitle",
          name: "subtitle",
          widget: "string",
        },
        {
          label: "Description",
          name: "description",
          widget: "markdown",
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
      ],
    },
    { label: "Button", name: "button", widget: "string" },
    { label: "Button Link", name: "button_link", widget: "string" },
  ],
};
