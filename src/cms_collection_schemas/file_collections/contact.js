import { frontPageSchema } from "./front_page";

export const pagesCollection = {
  label: "Pages",
  name: "pages",
  files: [
    {
      label: "Contact Page",
      name: "contact page",
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
    },
    frontPageSchema,
  ],
};
