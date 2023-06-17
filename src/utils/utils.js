export function pickLangPath(lang)   {
    return lang === "de" ? `/` : `/${lang}/`
}