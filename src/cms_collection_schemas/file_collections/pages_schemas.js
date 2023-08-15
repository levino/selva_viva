import { frontPageSchema } from "./front_page";
import { contactPageSchema } from "./contact";
import { supportPageSchema } from "./support_page";

const pagesCmsSchemas = {
  label: "Pages",
  name: "pages",
  files: [frontPageSchema, contactPageSchema, supportPageSchema],
};

export default pagesCmsSchemas;
