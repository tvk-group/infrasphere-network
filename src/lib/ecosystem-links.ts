import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/paths";

type EcosystemNameKey = keyof Pick<
  Dictionary["ecosystem"],
  "tvkGroup" | "tvkLabs" | "tvkInfrastructure" | "tvkEnergy" | "sovra" | "enteleKron" | "infraSphere"
>;

type EcosystemRoleKey = keyof Pick<
  Dictionary["ecosystem"],
  | "holdingLayer"
  | "labsLayer"
  | "operationsLayer"
  | "energyLayer"
  | "intelligenceLayer"
  | "trustLayer"
  | "infrastructureLayer"
>;

const ecosystemLinkConfig: {
  nameKey: EcosystemNameKey;
  roleKey: EcosystemRoleKey;
  href: string | "internal";
  highlight?: boolean;
}[] = [
  { nameKey: "tvkGroup", roleKey: "holdingLayer", href: "https://www.tvk.group" },
  { nameKey: "tvkLabs", roleKey: "labsLayer", href: "https://www.tvklabs.com" },
  { nameKey: "tvkInfrastructure", roleKey: "operationsLayer", href: "https://www.tvkinfrastructure.com" },
  { nameKey: "tvkEnergy", roleKey: "energyLayer", href: "https://www.tvkenergy.com" },
  { nameKey: "sovra", roleKey: "intelligenceLayer", href: "https://www.sovra.network" },
  { nameKey: "enteleKron", roleKey: "trustLayer", href: "https://www.entelekron.org" },
  { nameKey: "infraSphere", roleKey: "infrastructureLayer", href: "internal", highlight: true },
];

export function getEcosystemFooterItems(dict: Dictionary, locale: Locale) {
  return ecosystemLinkConfig.map((item) => ({
    label: `${dict.ecosystem[item.nameKey]} — ${dict.ecosystem[item.roleKey]}`,
    href: item.href === "internal" ? localizedPath(locale, "home") : item.href,
    external: item.href !== "internal",
    highlight: item.highlight ?? false,
  }));
}

export function getEcosystemLayers(dict: Dictionary, locale: Locale) {
  return ecosystemLinkConfig.map((item) => ({
    name: dict.ecosystem[item.nameKey],
    role: dict.ecosystem[item.roleKey],
    href: item.href === "internal" ? localizedPath(locale, "home") : item.href,
    external: item.href !== "internal",
    highlight: item.highlight ?? false,
  }));
}
