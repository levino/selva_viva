import { string } from "astro/zod";
import { defineCollection, z } from "astro:content";

const plantATreeCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      page_title: z.string(),
      bg_image: image(),
      bg_alt: z.string(),
      subtitle: z.string(),
      excerpt: z.string(),
      description_title: z.string(),
      description: z.string(),
      what_you_get: z.object({
        title: z.string(),
        list_items: z.array(z.string()),
        image: image(),
      }),
      button_text: z.string(),
      back_button_text: z.string(),
      cover_image: image(),
      cover_alt: z.string(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      page_title: z.string(),
      subtitle: z.string(),
      button_text: z.string(),
      excerpt: z.string(),
      url: z.string(),
      cover_image: image(),
      cover_alt: z.string(),
      what_you_get: z
        .object({
          title: z.string(),
          list_items: z.array(z.string()),
        })
        .optional(),
    }),
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

export const collections = {
  projects: projectsCollection,
  trees: treesCollection,
  blog: blogCollection,
  plantATree: plantATreeCollection,
};
