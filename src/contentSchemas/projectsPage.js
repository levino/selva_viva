import { z } from "astro:content";
import { headMetaData } from "./commonFields/headMetaData";

export const projectsPageSchema = ({ image }) =>
  z.object({
    meta: headMetaData(z, image),
    page_meta_title: z.string(),
    title: z.string(),
  });
