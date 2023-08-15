export function pickLangPath(lang) {
  return lang === "de" ? `/` : `/${lang}/`;
}

// const saveThisLink = `${pickLangPath(lang)}projects/${
//   project.slug === "tree-nursery"
//     ? project.slug
//     : "plant-a-tree/" + project.slug
// }`;
