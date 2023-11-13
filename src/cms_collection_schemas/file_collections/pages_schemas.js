import { frontPageSchemaDe } from "./front_page/de";
import { frontPageSchemaEs } from "./front_page/es";
import { frontPageSchemaEn } from "./front_page/en";
import { contactPageSchemaDe } from "./contact_page/de";
import { contactPageSchemaEn } from "./contact_page/en";
import { contactPageSchemaEs } from "./contact_page/es";
import { supportPageSchema } from "./support_page";
import { aboutUsSchemaDe } from "./about_us_page/de/index";
import { aboutUsSchemaEn } from "./about_us_page/en/index";
import { aboutUsSchemaEs } from "./about_us_page/es/index";
import { theFincaSchemaDe } from "./the_finca_page/de";
import { theFincaSchemaEn } from "./the_finca_page/en";
import { theFincaSchemaEs } from "./the_finca_page/es";
import { treeNurserySchemaDe } from "./tree_nursery_page/de";
import { treeNurserySchemaEn } from "./tree_nursery_page/en";
import { treeNurserySchemaEs } from "./tree_nursery_page/es";
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
    treeNurserySchemaEn,
    treeNurserySchemaEs,
    theFincaSchemaDe,
    theFincaSchemaEn,
    theFincaSchemaEs,
    aboutUsSchemaDe,
    aboutUsSchemaEn,
    aboutUsSchemaEs,
    contactPageSchemaDe,
    contactPageSchemaEn,
    contactPageSchemaEs,
    supportPageSchema,
  ],
};

export default pagesCmsSchemas;
