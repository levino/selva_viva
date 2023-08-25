import { frontPageSchema } from "./front_page";
import { contactPageSchema } from "./contact";
import { supportPageSchema } from "./support_page";
import { aboutUsPageSchema } from "./about_us_page";

const pagesCmsSchemas = {
  label: "Pages",
  name: "pages",
  files: [
    frontPageSchema,
    contactPageSchema,
    supportPageSchema,
    aboutUsPageSchema,
  ],
};

export default pagesCmsSchemas;
