export const frontPageSchema = {
  label: "Front Page",
  name: "front_page",
  file: "src/content/frontPage/front_page.md",
  fields: [
    {
      label: "Page Meta Title",
      name: "pageMetaTitle",
      widget: "string",
    },
    {
      label: "Hero",
      name: "hero",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        { label: "Greeting", name: "greeting", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Message", name: "msg", widget: "string" },
        { label: "Button", name: "button", widget: "string" },
        {
          label: "Hero BgImage",
          name: "hero_bg_image",
          widget: "image",
          choose_url: true,
        },
      ],
    },
    {
      label: "Participate",
      name: "participate",
      widget: "object",
      summary: "Participate Content",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Cards",
          name: "cards",
          widget: "list",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Link", name: "link", widget: "string" },
            { label: "Image", name: "image", widget: "image" },
            { label: "Image Alt", name: "image_alt", widget: "string" },
          ],
        },
      ],
    },
    {
      label: "Situation",
      name: "situation",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Paragraph", name: "paragraph", widget: "markdown" },
        {
          label: "Image",
          name: "image",
          widget: "image",

          choose_url: true,
        },
        { label: "Image Alt", name: "image_alt", widget: "string" },

        { label: "Button", name: "button", widget: "string" },
      ],
    },
    {
      label: "Problem",
      name: "problem",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Paragraph", name: "paragraph", widget: "markdown" },
        { label: "Image", name: "image", widget: "image", choose_url: true },
        { label: "Image Alt", name: "image_alt", widget: "string" },
        { label: "Button", name: "button", widget: "string" },
      ],
    },
    {
      label: "Solution",
      name: "solution",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Paragraph", name: "paragraph", widget: "markdown" },
        { label: "Image", name: "image", widget: "image", choose_url: true },
        { label: "Image Alt", name: "image_alt", widget: "string" },
        { label: "Button", name: "button", widget: "string" },
        { label: "Button_2", name: "button_2", widget: "string" },
      ],
    },
    {
      label: "Donors",
      name: "donors",
      widget: "object",
      summary: "{{fields.name}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Paragraph", name: "paragraph", widget: "markdown" },
        { label: "Image", name: "image", widget: "image", choose_url: true },
        { label: "Image Alt", name: "image_alt", widget: "string" },
        { label: "Button", name: "button", widget: "string" },
        { label: "Button_2", name: "button_2", widget: "string" },
        { label: "Button_3", name: "button_3", widget: "string" },
      ],
    },
  ],
};
