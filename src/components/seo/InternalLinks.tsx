import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localizedPath, type PathKey } from "@/i18n/paths";
import { relatedPagesMap } from "@/lib/seo/internal-links";

interface InternalLinksProps {
  locale: Locale;
  dict: Dictionary;
  pathKey: PathKey;
}

const navLabelKeys: Record<PathKey, keyof Dictionary["nav"] | "app"> = {
  home: "home",
  about: "about",
  infrastructure: "infrastructure",
  energySystems: "energySystems",
  aiInfrastructure: "aiInfrastructure",
  industrialTechnology: "industrialTechnology",
  modularSystems: "modularSystems",
  projects: "projects",
  strategicPartnerships: "strategicPartnerships",
  insights: "insights",
  contact: "contact",
  app: "app",
  appApply: "app",
  appProjects: "app",
  appContact: "app",
  appInstall: "app",
};

function linkLabel(dict: Dictionary, key: PathKey): string {
  if (key === "app") return dict.app.nav.dashboard;
  if (key === "appApply") return dict.app.nav.apply;
  if (key === "appProjects") return dict.app.nav.projects;
  if (key === "appContact") return dict.app.nav.contact;
  if (key === "appInstall") return dict.app.nav.install;
  return dict.nav[navLabelKeys[key] as keyof Dictionary["nav"]];
}

export function InternalLinks({ locale, dict, pathKey }: InternalLinksProps) {
  const related = relatedPagesMap[pathKey];
  if (!related.length) return null;

  return (
    <section className="py-12 bg-silver border-t border-silver-dark">
      <div className="site-container">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-steel mb-6">
          {dict.seo.relatedLinksTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((key) => (
            <Link
              key={key}
              href={localizedPath(locale, key)}
              className="p-5 bg-white border border-silver-dark hover:border-energy-blue/40 transition-colors group"
            >
              <span className="text-sm font-medium text-navy group-hover:text-energy-blue transition-colors">
                {linkLabel(dict, key)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
