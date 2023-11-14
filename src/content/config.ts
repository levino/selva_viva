import { reference, defineCollection, z } from "astro:content";
import { theFincaSchema } from "../contentSchemas/theFinca";
import { frontPageSchema } from "../contentSchemas/frontPage";
import { treeNurserySchema } from "../contentSchemas/treeNursery";
import { projectsPageSchema } from "../contentSchemas/projectsPage";
import { plantAndProtectSchema } from "../contentSchemas/plantAndProtect";

const frontPage = defineCollection({
  type: "content",
  schema: frontPageSchema,
});

const projectsPage = defineCollection({
  type: "content",
  schema: projectsPageSchema,
});

const treeNursery = defineCollection({
  type: "content",
  schema: treeNurserySchema,
});

const contactPage = defineCollection({
  type: "content",
  schema: z.object({
    page_title: z.string(),
    paragraph: z.string(),
    email: z.string().email(),
  }),
});
const plantAndProtectCollection = defineCollection({
  type: "content",
  schema: plantAndProtectSchema,
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      excerpt: z.string(),
      publish_date: z.string(),
      cover_image: image(),
      cover_alt: z.string(),
    }),
});

const treesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      other_names: z.array(z.string()),
      galleryImages: z.array(image()),
      scientific_name: z.string(),
      scientific_synonyms: z.array(z.string()),
      excerpt: z.string(),
      general_information: z.string(),
      range: z.string(),
      habitat: z.string(),
      properties: z.object({
        conservation_status: z.string(),
        medicinal_rating: z.number(),
        other_uses: z.number(),
        wood: z.number(),
        habit: z.string(),
        height: z.string(),
        growth_rate: z.string(),
        pollinators: z.string(),
        cultivation_status: z.array(z.string()),
      }),
      ecological_importance: z.string(),
      nutritional_uses: z.string().optional(),
      medicinal_uses: z.string().optional(),
      agroforestry: z.string().optional(),
      wood: z.string(),
      other_uses: z.string().optional(),
      more_info: z.array(z.string()),
    }),
});

const supportPageSchema = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      page_meta_title: z.string(),
      title: z.string(),
      subtitle: z.string(),
      excerpt: z.string(),
      list_how_we_use_money: z.array(z.string()),
      projects_section_title: z.string(),
      projects_section_subtitle: z.string(),
    }),
});

const aboutUsPageSchema = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      page_meta_title: z.string(),
      title: z.string(),
      subtitle: z.string(),
      excerpt: z.string(),
      hero_image: image(),
      hero_alt: z.string(),
      hero_button: z.object({
        hero_button_text: z.string(),
        hero_button_link: z.string(),
      }),
      vision: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        image: image(),
        image_alt: z.string(),
      }),
      how_all_started: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        image: image(),
        image_alt: z.string(),
      }),
      button: z.string(),
      button_link: z.string(),
      team: z
        .object({
          title: z.string(),
          team_members: z.array(reference("team")),
        })
        .optional(),
    }),
});

const teamMembersCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      profile_image: image(),
      profile_image_alt: z.string(),
      name: z.string(),
      role: z.string(),
      description: z.string(),
    }),
});

const theFinca = defineCollection({
  type: "content",
  schema: theFincaSchema,
});

export const collections = {
  trees: treesCollection,
  blog: blogCollection,
  team: teamMembersCollection,
  plantAndProtect: plantAndProtectCollection,
  frontPage: frontPage,
  supportPage: supportPageSchema,
  aboutUsPage: aboutUsPageSchema,
  theFinca,
  treeNursery,
  projectsPage,
  contactPage,
};
