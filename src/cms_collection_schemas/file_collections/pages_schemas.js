import { frontPageSchemaDe } from "./front_page/front_page_de";
import { frontPageSchemaEs } from "./front_page/front_page_es";
import { frontPageSchemaEn } from "./front_page/front_page_en";
import { contactPageSchema } from "./contact";
import { supportPageSchema } from "./support_page";
import { aboutUsPageSchema } from "./about_us_page";
import { theFincaSchema } from "./the_finca";
import { treeNurseryPageSchema } from "./tree_nursery";

const pagesCmsSchemas = {
  label: "Pages",
  name: "pages",
  files: [
    frontPageSchemaEn,
    frontPageSchemaDe,
    frontPageSchemaEs,
    contactPageSchema,
    supportPageSchema,
    aboutUsPageSchema,
    theFincaSchema,
    treeNurseryPageSchema,
  ],
};

export default pagesCmsSchemas;
