export const contactPageSchema = {
  label: "Contact Page",
  name: "contact_page",
  file: "src/non_collection_content/de/contact.md",
  fields: [
    {
      label: "Page title",
      name: "page_title",
      widget: "string",
    },
    {
      label: "Paragraph",
      name: "paragraph",
      widget: "string",
    },
    {
      label: "Email",
      name: "email",
      widget: "string",
    },
  ],
};
