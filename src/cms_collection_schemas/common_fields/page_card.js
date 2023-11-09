export const pageCard = {
  label: "Page Card",
  name: "page_card",
  summary: "{{fields.title}}",
  collapsed: true,
  widget: "object",
  fields: [
    { labe: "Title", name: "title", widget: "string" },
    { labe: "Excerpt", name: "excerpt", widget: "markdown" },
    { labe: "Link", name: "link", widget: "string" },
    { labe: "Link Text", name: "link_text", widget: "string" },
    { labe: "Cover Image", name: "cover_image", widget: "image" },
    { labe: "Cover Image Alt", name: "cover_image_alt", widget: "string" },
  ],
};
