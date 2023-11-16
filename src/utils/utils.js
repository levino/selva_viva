import { getRelativeLocaleUrl } from "astro:i18n";
import { useTranslationsForLinks } from "../i18n/utils";

export function pickLangPath(lang) {
  return lang === "en" ? `/` : `/${lang}/`;
}

// const saveThisLink = `${pickLangPath(lang)}projects/${
//   project.slug === "tree-nursery"
//     ? project.slug
//     : "plant-a-tree/" + project.slug
// }`;
