import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { localizedPath, type PathKey } from "@/i18n/paths";

export const navPathKeys: { key: PathKey; navKey: keyof Dictionary["nav"] }[] = [
  { key: "home", navKey: "home" },
  { key: "about", navKey: "about" },
  { key: "infrastructure", navKey: "infrastructure" },
  { key: "energySystems", navKey: "energySystems" },
  { key: "aiInfrastructure", navKey: "aiInfrastructure" },
  { key: "industrialTechnology", navKey: "industrialTechnology" },
  { key: "modularSystems", navKey: "modularSystems" },
  { key: "projects", navKey: "projects" },
  { key: "strategicPartnerships", navKey: "strategicPartnerships" },
  { key: "insights", navKey: "insights" },
  { key: "contact", navKey: "contact" },
];

export function getNavItems(locale: Locale, dict: Dictionary) {
  return navPathKeys.map(({ key, navKey }) => ({
    label: dict.nav[navKey],
    href: localizedPath(locale, key),
  }));
}

export const focusAreaConfig = [
  { dictKey: "energyInfrastructure" as const, pathKey: "energySystems" as const, icon: "energy" as const },
  { dictKey: "aiInfrastructure" as const, pathKey: "aiInfrastructure" as const, icon: "ai" as const },
  { dictKey: "smartInfrastructure" as const, pathKey: "infrastructure" as const, icon: "smart" as const },
  { dictKey: "industrialTechnology" as const, pathKey: "industrialTechnology" as const, icon: "industrial" as const },
  { dictKey: "modularInfrastructure" as const, pathKey: "modularSystems" as const, icon: "modular" as const },
  { dictKey: "miningInfrastructure" as const, pathKey: "projects" as const, icon: "mining" as const },
];

export function getFocusAreas(locale: Locale, dict: Dictionary) {
  return focusAreaConfig.map(({ dictKey, pathKey, icon }) => ({
    title: dict.focusAreas[dictKey].title,
    description: dict.focusAreas[dictKey].description,
    href: localizedPath(locale, pathKey),
    icon,
  }));
}

export function getEcosystemLayers(dict: Dictionary) {
  return [
    { name: dict.ecosystem.tvkGroup, role: dict.ecosystem.holdingLayer },
    { name: dict.ecosystem.sovra, role: dict.ecosystem.intelligenceLayer },
    { name: dict.ecosystem.enteleKron, role: dict.ecosystem.trustLayer },
    { name: dict.ecosystem.infraSphere, role: dict.ecosystem.infrastructureLayer, highlight: true },
  ];
}
