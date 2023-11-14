import { z } from "astro:content";
import { pageCard } from "./commonFields/pageCard";

export const plantAndProtectSchema = ({ image }) =>
  z.object({
    title: z.string(),
    page_title: z.string(),
    page_card: pageCard(z, image),
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
      image_alt: z.string(),
    }),
    button_text: z.string(),
    button_link: z.string(),
    back_button_text: z.string(),
    cover_image: image(),
    cover_alt: z.string(),
  });
