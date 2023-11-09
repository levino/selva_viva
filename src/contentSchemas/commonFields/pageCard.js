export const pageCard = (z, image) => {
  return z.object({
    title: z.string(),
    excerpt: z.string(),
    link: z.string(),
    link_text: z.string(),
    cover_image: image(),
    cover_image_alt: z.string(),
  });
};
