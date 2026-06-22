export const locales = [
  "en",
  "tr",
  "de",
  "ar",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "ru",
  "zh",
  "ja",
  "ko",
  "hi",
  "pl",
  "sv",
  "no",
  "da",
  "fi",
  "cs",
  "el",
  "he",
  "id",
  "ms",
  "uk",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  ar: "العربية",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  nl: "Nederlands",
  ru: "Русский",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  hi: "हिन्दी",
  pl: "Polski",
  sv: "Svenska",
  no: "Norsk",
  da: "Dansk",
  fi: "Suomi",
  cs: "Čeština",
  el: "Ελληνικά",
  he: "עברית",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  uk: "Українська",
};

export const rtlLocales: Locale[] = ["ar", "he"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
