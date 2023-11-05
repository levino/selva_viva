import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import { treesSchema } from "./src/cms_collection_schemas/folder_collections/trees";
import pages_schemas from "./src/cms_collection_schemas/file_collections/pages_schemas";
import { postsSchema } from "./src/cms_collection_schemas/folder_collections/posts";
import tailwind from "@astrojs/tailwind";
import { plantAndProtectSchema } from "./src/cms_collection_schemas/folder_collections/plantAndProtect";
import { teamMembersSchema } from "./src/cms_collection_schemas/folder_collections/teamMembers";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        disableIdentityWidgetInjection: true,
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        // Configure where our media assets are stored & served from
        media_folder: "src/assets/",
        public_folder: "/src/assets/",
        // Configure the content collections
        collections: [
          pages_schemas,
          treesSchema,
          postsSchema,
          plantAndProtectSchema,
          teamMembersSchema,
        ],
      },
    }),
    ,
    tailwind(),
  ],
  experimental: {
    assets: true,
  },
});
