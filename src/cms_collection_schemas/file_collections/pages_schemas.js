import { frontPageSchema } from "./front_page";
import { contactPageSchema } from "./contact";

const pagesCmsSchemas = {
  label: "Pages",
  name: "pages",
  files: [frontPageSchema, contactPageSchema],
};

export default pagesCmsSchemas;
