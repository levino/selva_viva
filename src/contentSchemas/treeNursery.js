import { z } from "astro:content";

export const treeNurserySchema = ({ image }) =>
  z.object({
    page_meta_title: z.string(),
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
  });
