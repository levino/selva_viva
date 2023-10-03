import { frontPageSchema } from "./front_page";
import { contactPageSchema } from "./contact";
import { supportPageSchema } from "./support_page";
import { aboutUsPageSchema } from "./about_us_page";
import { natureReserveSchema } from "./nature_reserve";
import { treeNurseryPageSchema } from "./tree_nursery";

const pagesCmsSchemas = {
  label: "Pages",
  name: "pages",
  files: [
    frontPageSchema,
    contactPageSchema,
    supportPageSchema,
    aboutUsPageSchema,
    natureReserveSchema,
    treeNurseryPageSchema,
  ],
};

export default pagesCmsSchemas;
