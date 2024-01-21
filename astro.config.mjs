import { defineConfig } from "astro/config";
//import NetlifyCMS from "astro-netlify-cms";
import { treesSchema } from "./src/cms_collection_schemas/folder_collections/trees";
import pages_schemas from "./src/cms_collection_schemas/file_collections/pages_schemas";
import { postsSchema } from "./src/cms_collection_schemas/folder_collections/posts";
import tailwind from "@astrojs/tailwind";
import { teamMembersSchema } from "./src/cms_collection_schemas/folder_collections/teamMembers";
import folderCollections from "./src/cms_collection_schemas/folder_collections/folder_collections";
//this are the collections from the cms
const {
  plantAndProtectSchemaDe,
  plantAndProtectSchemaEn,
  plantAndProtectSchemaEs,
} = folderCollections;

// https://astro.build/config
export default defineConfig({
  site: "https://vivalaselva.org",

  i18n: {
    defaultLocale: "en",
    locales: ["de", "es", "en"],
  },

  integrations: [tailwind()],
});
