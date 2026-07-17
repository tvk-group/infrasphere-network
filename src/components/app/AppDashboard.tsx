"use client";

import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizedPath } from "@/i18n/paths";

export function AppDashboard() {
  const { locale, dict } = useDictionary();
  const { dashboard: d } = dict.app;

  const cards = [
    { key: "apply" as const, path: "appApply" as const },
    { key: "projects" as const, path: "appProjects" as const },
    { key: "contact" as const, path: "appContact" as const },
    { key: "install" as const, path: "appInstall" as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <span className="inline-block px-2 py-1 text-[10px] font-semibold uppercase tracking-widest bg-energy-blue/25 text-energy-blue mb-3">
          {dict.app.stageBadge}
        </span>
        <h1 className="text-xl font-semibold text-white tracking-tight">{d.welcome}</h1>
        <p className="mt-2 text-sm portal-muted leading-relaxed">{d.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 portal-surface border">
          <p className="text-[10px] uppercase tracking-wider portal-subtle">{d.stats.focusAreas}</p>
          <p className="text-2xl font-semibold text-energy-blue mt-1">6</p>
        </div>
        <div className="p-3 portal-surface border">
          <p className="text-[10px] uppercase tracking-wider portal-subtle">{d.stats.pipeline}</p>
          <p className="text-2xl font-semibold text-accent-green mt-1">8+</p>
        </div>
        <div className="col-span-2 p-3 portal-surface border">
          <p className="text-[10px] uppercase tracking-wider portal-subtle">{d.stats.stage}</p>
          <p className="text-sm font-medium text-white mt-1">{d.stats.stageValue}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest portal-subtle mb-3">{d.quickActions}</h2>
        <div className="space-y-3">
          {cards.map(({ key, path }) => {
            const card = d.cards[key];
            return (
              <Link
                key={key}
                href={localizedPath(locale, path)}
                className="block p-4 portal-surface border hover:border-energy-blue/50 transition-colors"
              >
                <p className="text-sm font-medium text-white">{card.title}</p>
                <p className="text-xs portal-muted mt-1">{card.description}</p>
                <span className="inline-block mt-2 text-xs text-energy-blue font-medium">{card.cta} →</span>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="text-[11px] portal-muted leading-relaxed border-t border-white/20 pt-4">{d.notice}</p>
      <p className="text-[11px] portal-subtle">{d.ecosystem}</p>
    </div>
  );
}
