import { getRelativeLocaleUrl } from "astro:i18n";
import { useTranslationsForLinks } from "../i18n/utils";

export function pickLangPath(lang) {
  return lang === "en" ? `/` : `/${lang}/`;
}

export const getRoute = (lang, route) => {
  const r = useTranslationsForLinks(lang);
  return `${getRelativeLocaleUrl(lang)}${r(route)}`;
};

// const saveThisLink = `${pickLangPath(lang)}projects/${
//   project.slug === "tree-nursery"
//     ? project.slug
//     : "plant-a-tree/" + project.slug
// }`;
