import { frontPageSchemaDe } from "./front_page/front_page_de";
import { frontPageSchemaEs } from "./front_page/front_page_es";
import { frontPageSchemaEn } from "./front_page/front_page_en";
import { contactPageSchema } from "./contact";
import { supportPageSchema } from "./support_page";
import { aboutUsSchemaDe } from "./about_us_page/about_us_de";
import { theFincaSchemaDe } from "./the_finca_page/de/index";
import { treeNurseryPageSchema } from "./tree_nursery";
import { projectsPageSchemaDe } from "./projects_page/de";
import { projectsPageSchemaEn } from "./projects_page/en";
import { projectsPageSchemaEs } from "./projects_page/es";
const pagesCmsSchemas = {
  label: "Pages",
  name: "pages",
  files: [
    frontPageSchemaEn,
    frontPageSchemaDe,
    frontPageSchemaEs,
    projectsPageSchemaDe,
    projectsPageSchemaEn,
    projectsPageSchemaEs,
    theFincaSchemaDe,
    aboutUsSchemaDe,
    contactPageSchema,
    supportPageSchema,
    treeNurseryPageSchema,
  ],
};

export default pagesCmsSchemas;
