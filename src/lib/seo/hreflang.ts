import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { localizedPath, type PathKey } from "@/i18n/paths";
import { SITE_URL } from "./constants";

/** BCP 47 hreflang codes for search engines */
export const hreflangCodes: Record<Locale, string> = {
  en: "en",
  tr: "tr",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  pt: "pt",
  nl: "nl",
  ar: "ar",
  ru: "ru",
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW",
  ja: "ja",
  ko: "ko",
  hi: "hi",
  ur: "ur",
  pl: "pl",
  ro: "ro",
  el: "el",
  sv: "sv",
  no: "no",
  da: "da",
  fi: "fi",
  he: "he",
  id: "id",
};

/** HTML lang attribute values */
export const htmlLangCodes: Record<Locale, string> = {
  en: "en",
  tr: "tr",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  pt: "pt",
  nl: "nl",
  ar: "ar",
  ru: "ru",
  "zh-cn": "zh-Hans",
  "zh-tw": "zh-Hant",
  ja: "ja",
  ko: "ko",
  hi: "hi",
  ur: "ur",
  pl: "pl",
  ro: "ro",
  el: "el",
  sv: "sv",
  no: "nb",
  da: "da",
  fi: "fi",
  he: "he",
  id: "id",
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildHreflangAlternates(pathKey: PathKey): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[hreflangCodes[locale]] = absoluteUrl(localizedPath(locale, pathKey));
  }
  languages["x-default"] = absoluteUrl(localizedPath("en", pathKey));
  return languages;
}

export function buildHreflangXmlLinks(pathKey: PathKey): string {
  return locales
    .map(
      (locale) =>
        `<xhtml:link rel="alternate" hreflang="${hreflangCodes[locale]}" href="${absoluteUrl(localizedPath(locale, pathKey))}" />`
    )
    .concat(
      `<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localizedPath("en", pathKey))}" />`
    )
    .join("\n    ");
}
