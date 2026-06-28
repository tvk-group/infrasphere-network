import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/paths";

export const APP_HOST = "app.infrasphere.network";

export function appPath(locale: Locale, key: "app" | "appApply" | "appProjects" | "appContact" | "appInstall" = "app") {
  return localizedPath(locale, key);
}

export function appAbsoluteUrl(locale: Locale, key: "app" | "appApply" | "appProjects" | "appContact" | "appInstall" = "app") {
  return `https://${APP_HOST}${appPath(locale, key)}`;
}
