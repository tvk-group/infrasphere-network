import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localizedPath, type PathKey } from "@/i18n/paths";

interface BreadcrumbsProps {
  locale: Locale;
  dict: Dictionary;
  items: { pathKey: PathKey; label: string }[];
}

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="site-container py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-steel">
        {items.map((item, index) => (
          <li key={item.pathKey} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true" className="text-steel-light">/</span>}
            {index === items.length - 1 ? (
              <span className="text-navy font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={localizedPath(locale, item.pathKey)} className="hover:text-energy-blue transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbItems(
  dict: Dictionary,
  pathKey: PathKey
): { pathKey: PathKey; label: string }[] {
  const home = { pathKey: "home" as const, label: dict.nav.home };
  if (pathKey === "home") return [home];

  const labels: Record<PathKey, string> = {
    home: dict.nav.home,
    about: dict.nav.about,
    infrastructure: dict.nav.infrastructure,
    energySystems: dict.nav.energySystems,
    aiInfrastructure: dict.nav.aiInfrastructure,
    industrialTechnology: dict.nav.industrialTechnology,
    modularSystems: dict.nav.modularSystems,
    projects: dict.nav.projects,
    strategicPartnerships: dict.nav.strategicPartnerships,
    insights: dict.nav.insights,
    contact: dict.nav.contact,
    app: dict.app.nav.dashboard,
    appApply: dict.app.nav.apply,
    appProjects: dict.app.nav.projects,
    appContact: dict.app.nav.contact,
    appInstall: dict.app.nav.install,
  };

  return [home, { pathKey, label: labels[pathKey] }];
}
