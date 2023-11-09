import { z } from "astro:content";

export const treeNurserySchema = ({ image }) =>
  z.object({
    page_meta_title: z.string(),
    page_card: z.object({
      title: z.string(),
      excerpt: z.string(),
      link: z.string(),
      link_text: z.string(),
      cover_image: image(),
      cover_image_alt: z.string(),
    }),
    hero: z.array(
      z.object({
        top: z.string(),
        center: z.string(),
        bottom: z.string(),
        image: image(),
        image_alt: z.string(),
      })
    ),
    our_trees: z.object({
      title: z.string(),
      subtitle: z.string(),
      trees_list: z.array(z.string()),
      image: image(),
      image_alt: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
    goals: z.object({
      title: z.string(),
      subtitle: z.string(),
      list: z.array(z.string()),
      read_more_text: z.string(),
      read_more_link: z.string(),
      image: image(),
      image_alt: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
    cta_center: z.object({
      button_text: z.string(),
      button_link: z.string(),
    }),
  });
