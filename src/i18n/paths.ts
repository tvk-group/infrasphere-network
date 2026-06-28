import type { Locale } from "./config";

export const pathKeys = [
  "home",
  "about",
  "infrastructure",
  "energySystems",
  "aiInfrastructure",
  "industrialTechnology",
  "modularSystems",
  "projects",
  "strategicPartnerships",
  "insights",
  "contact",
  "app",
  "appApply",
  "appProjects",
  "appContact",
  "appInstall",
] as const;

export type PathKey = (typeof pathKeys)[number];

export const pathSlugs: Record<PathKey, string> = {
  home: "",
  about: "about",
  infrastructure: "infrastructure",
  energySystems: "energy-systems",
  aiInfrastructure: "ai-infrastructure",
  industrialTechnology: "industrial-technology",
  modularSystems: "modular-systems",
  projects: "projects",
  strategicPartnerships: "strategic-partnerships",
  insights: "insights",
  contact: "contact",
  app: "app",
  appApply: "app/apply",
  appProjects: "app/projects",
  appContact: "app/contact",
  appInstall: "app/install",
};

export function localizedPath(locale: Locale, key: PathKey): string {
  const slug = pathSlugs[key];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}
