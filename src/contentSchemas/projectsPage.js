import { z } from "astro:content";

export const projectsPageSchema = ({ image }) =>
  z.object({
    page_meta_title: z.string(),
    title: z.string(),
  });
