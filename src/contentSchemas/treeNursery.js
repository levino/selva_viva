import { z } from "astro:content";
import { pageCard } from "./commonFields/pageCard";
import { headMetaData } from "./commonFields/headMetaData";

export const treeNurserySchema = ({ image }) =>
  z.object({
    meta: headMetaData(z, image),
    page_meta_title: z.string(),
    page_card: pageCard(z, image),
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
