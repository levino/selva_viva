import { z } from "astro:content";

export const natureReserveSchema = ({ image }) =>
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
  });
