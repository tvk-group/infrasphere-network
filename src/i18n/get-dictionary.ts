import type { Locale } from "./config";
import { en } from "./messages/en";

export type Dictionary = typeof en;

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => en,
  tr: async () => (await import("./messages/tr")).default as unknown as Dictionary,
  de: async () => (await import("./messages/de")).default as unknown as Dictionary,
  ar: async () => (await import("./messages/ar")).default as unknown as Dictionary,
  fr: async () => (await import("./messages/fr")).default as unknown as Dictionary,
  es: async () => (await import("./messages/es")).default as unknown as Dictionary,
  it: async () => (await import("./messages/it")).default as unknown as Dictionary,
  pt: async () => (await import("./messages/pt")).default as unknown as Dictionary,
  nl: async () => (await import("./messages/nl")).default as unknown as Dictionary,
  ru: async () => (await import("./messages/ru")).default as unknown as Dictionary,
  zh: async () => (await import("./messages/zh")).default as unknown as Dictionary,
  ja: async () => (await import("./messages/ja")).default as unknown as Dictionary,
  ko: async () => (await import("./messages/ko")).default as unknown as Dictionary,
  hi: async () => (await import("./messages/hi")).default as unknown as Dictionary,
  pl: async () => (await import("./messages/pl")).default as unknown as Dictionary,
  sv: async () => (await import("./messages/sv")).default as unknown as Dictionary,
  no: async () => (await import("./messages/no")).default as unknown as Dictionary,
  da: async () => (await import("./messages/da")).default as unknown as Dictionary,
  fi: async () => (await import("./messages/fi")).default as unknown as Dictionary,
  cs: async () => (await import("./messages/cs")).default as unknown as Dictionary,
  el: async () => (await import("./messages/el")).default as unknown as Dictionary,
  he: async () => (await import("./messages/he")).default as unknown as Dictionary,
  id: async () => (await import("./messages/id")).default as unknown as Dictionary,
  ms: async () => (await import("./messages/ms")).default as unknown as Dictionary,
  uk: async () => (await import("./messages/uk")).default as unknown as Dictionary,
};

const cache: Partial<Record<Locale, Dictionary>> = { en };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (cache[locale]) return cache[locale] as Dictionary;
  const dict = await loaders[locale]();
  cache[locale] = dict;
  return dict;
}
