import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PathKey } from "@/i18n/paths";
import { buildPageMetadata } from "./metadata";
import { getPageSeo } from "./schema";

export async function generatePageMetadata(
  localeParam: string,
  pathKey: PathKey
): Promise<Metadata> {
  if (!isLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const { title, description } = getPageSeo(dict, pathKey);
  return buildPageMetadata({ locale, pathKey, title, description, dict });
}
