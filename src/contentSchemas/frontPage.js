import { z } from "astro:content";

export const frontPageSchema = ({ image }) =>
  z.object({
    pageMetaTitle: z.string(),
    hero: z.object({
      greeting: z.string(),
      title: z.string(),
      msg: z.string(),
      hero_bg_image: image(),
      button: z.string(),
    }),
    participate: z.object({
      title: z.string(),
      cards: z.array(
        z.object({
          title: z.string(),
          link: z.string(),
          image: image(),
          image_alt: z.string(),
        })
      ),
    }),
    about_us: z.object({
      title: z.string(),
      paragraph: z.string(),
      link: z.string(),
      link_text: z.string(),
    }),
    situation: z.object({
      title: z.string(),
      paragraph: z.string(),
      image: image(),
      image_alt: z.string(),
      button: z.string(),
    }),
    problem: z.object({
      title: z.string(),
      paragraph: z.string(),
      image: image(),
      image_alt: z.string(),
      button: z.string(),
    }),
    solution: z.object({
      title: z.string(),
      paragraph: z.string(),
      image: image(),
      image_alt: z.string(),
      button: z.string(),
      button_2: z.string(),
    }),
    donors: z.object({
      title: z.string(),
      paragraph: z.string(),
      image: image(),
      image_alt: z.string(),
      button: z.string(),
      button_2: z.string(),
      button_3: z.string(),
    }),
  });
