export const locales = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "ar",
  "ru",
  "zh-cn",
  "zh-tw",
  "ja",
  "ko",
  "hi",
  "ur",
  "pl",
  "ro",
  "el",
  "sv",
  "no",
  "da",
  "fi",
  "he",
  "id",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  nl: "Nederlands",
  ar: "العربية",
  ru: "Русский",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  hi: "हिन्दी",
  ur: "اردو",
  pl: "Polski",
  ro: "Română",
  el: "Ελληνικά",
  sv: "Svenska",
  no: "Norsk",
  da: "Dansk",
  fi: "Suomi",
  he: "עברית",
  id: "Bahasa Indonesia",
};

export const rtlLocales: Locale[] = ["ar", "he", "ur"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
