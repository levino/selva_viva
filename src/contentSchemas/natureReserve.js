import { ZodLazy } from "astro/zod";
import { z } from "astro:content";

export const natureReserveSchema = ({ image }) =>
  z.object({
    page_meta_title: z.string(),
    title: z.string(),
    hero: z.object({
      main_title: z.string(),
      main_title_image: image(),
      main_title_image_alt: z.string(),
      h2_title: z.string(),
      h2_title_image: image(),
      h2_title_image_alt: z.string(),
      h3_title: z.string(),
      h3_title_image: image(),
      h3_title_image_alt: z.string(),
      h4_title: z.string(),
      h4_title_image: image(),
      h4_title_image_alt: z.string(),
    }),
    our_trees: z.object({
      title: z.string(),
      subtitle: z.string(),
      trees_list: z.array(z.string()),
      image: image(),
      image_alt: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
    relevance: z.object({
      title: z.string(),
      subtitle: z.string(),
      relevance_list: z.array(z.string()),
      image: image(),
      image_alt: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
    cta_center: z.object({
      button_text: z.string(),
      button_link: z.string(),
    }),
    location: z.object({
      title: z.string(),
      subtitle_1: z.string(),
      paragraph_1: z.string(),
      subtitle_2: z.string(),
      paragraph_2: z.string(),
    }),
    reserve_story: z.object({
      title: z.string(),
      subtitle_1: z.string(),
      paragraph_1: z.string(),
      subtitle_2: z.string(),
      paragraph_2: z.string(),
      image: image(),
      image_alt: z.string(),
    }),
    cta_bottom: z.object({
      button_1_text: z.string(),
      button_1_link: z.string(),
      button_2_text: z.string(),
      button_2_link: z.string(),
    }),
  });
