import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      experpt: z.string(),
      url: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      experpt: z.string(),
      date: z.date(),
      cover: image(),
      coverAlt: z.string(),
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
};
