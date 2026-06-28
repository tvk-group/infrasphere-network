import type { PathKey } from "@/i18n/paths";

/** Automatic internal linking map — related infrastructure pages */
export const relatedPagesMap: Record<PathKey, PathKey[]> = {
  home: ["infrastructure", "energySystems", "aiInfrastructure", "strategicPartnerships", "app"],
  about: ["infrastructure", "projects", "strategicPartnerships"],
  infrastructure: ["energySystems", "aiInfrastructure", "industrialTechnology", "projects"],
  energySystems: ["infrastructure", "modularSystems", "aiInfrastructure"],
  aiInfrastructure: ["energySystems", "infrastructure", "industrialTechnology"],
  industrialTechnology: ["infrastructure", "aiInfrastructure", "modularSystems"],
  modularSystems: ["energySystems", "infrastructure", "projects"],
  projects: ["infrastructure", "aiInfrastructure", "strategicPartnerships"],
  strategicPartnerships: ["contact", "projects", "about"],
  insights: ["infrastructure", "energySystems", "aiInfrastructure"],
  contact: ["strategicPartnerships", "about", "projects"],
  app: ["appApply", "appProjects", "appContact"],
  appApply: ["app", "appContact", "strategicPartnerships"],
  appProjects: ["app", "projects", "infrastructure"],
  appContact: ["app", "contact", "appApply"],
  appInstall: ["app", "appApply"],
};
