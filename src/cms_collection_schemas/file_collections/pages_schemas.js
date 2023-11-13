import { frontPageSchemaDe } from "./front_page/front_page_de";
import { frontPageSchemaEs } from "./front_page/front_page_es";
import { frontPageSchemaEn } from "./front_page/front_page_en";
import { contactPageSchema } from "./contact";
import { supportPageSchema } from "./support_page";
import { aboutUsSchemaDe } from "./about_us_page/de/index";
import { aboutUsSchemaEn } from "./about_us_page/en/index";
import { aboutUsSchemaEs } from "./about_us_page/es/index";
import { theFincaSchemaDe } from "./the_finca_page/de";
import { theFincaSchemaEn } from "./the_finca_page/en";
import { theFincaSchemaEs } from "./the_finca_page/es";
import { treeNurserySchemaDe } from "./tree_nursery_page/de";
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
    treeNurserySchemaDe,
    theFincaSchemaDe,
    theFincaSchemaEn,
    theFincaSchemaEs,
    aboutUsSchemaDe,
    aboutUsSchemaEn,
    aboutUsSchemaEs,
    contactPageSchema,
    supportPageSchema,
  ],
};

export default pagesCmsSchemas;
