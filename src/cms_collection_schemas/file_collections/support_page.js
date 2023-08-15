export const supportPageSchema = {
  label: "Support Page",
  name: "support_page",
  file: "src/content/supportPage/support_page.md",
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
    {
      label: "List How We Use Money",
      name: "list_how_we_use_money",
      summary: "{{fields.name}}",
      widget: "list",
      field: {
        name: "list_item",
        label: "List Item",
        widget: "string",
      },
    },
    {
      label: "Projects Section Title",
      name: "projects_section_title",
      widget: "string",
    },
    {
      label: "projects Section Subtitle",
      name: "projects_section_subtitle",
      widget: "string",
    },
  ],
};
