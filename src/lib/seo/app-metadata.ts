import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PathKey } from "@/i18n/paths";
import { buildPageMetadata } from "./metadata";

type AppPathKey = Extract<PathKey, "app" | "appApply" | "appProjects" | "appContact" | "appInstall">;

function getAppSeo(dict: Awaited<ReturnType<typeof getDictionary>>, pathKey: AppPathKey) {
  switch (pathKey) {
    case "app":
      return { title: dict.app.metaTitle, description: dict.app.metaDescription };
    case "appApply":
      return { title: dict.app.apply.metaTitle, description: dict.app.apply.metaDescription };
    case "appProjects":
      return { title: dict.app.projects.metaTitle, description: dict.app.projects.metaDescription };
    case "appContact":
      return { title: dict.app.contact.metaTitle, description: dict.app.contact.metaDescription };
    case "appInstall":
      return { title: dict.app.install.metaTitle, description: dict.app.install.metaDescription };
  }
}

export async function generateAppMetadata(localeParam: string, pathKey: AppPathKey): Promise<Metadata> {
  if (!isLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const { title, description } = getAppSeo(dict, pathKey);
  return buildPageMetadata({ locale, pathKey, title, description, dict });
}
