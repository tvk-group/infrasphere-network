"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizedPath } from "@/i18n/paths";

const navItems = [
  { key: "app" as const, navKey: "dashboard" as const, icon: "home" },
  { key: "appApply" as const, navKey: "apply" as const, icon: "apply" },
  { key: "appProjects" as const, navKey: "projects" as const, icon: "projects" },
  { key: "appContact" as const, navKey: "contact" as const, icon: "contact" },
  { key: "appInstall" as const, navKey: "install" as const, icon: "install" },
] as const;

function NavIcon({ type, active }: { type: string; active: boolean }) {
  const color = active ? "text-energy-blue" : "text-white/75";
  if (type === "home") {
    return (
      <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
      </svg>
    );
  }
  if (type === "apply") {
    return (
      <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  if (type === "projects") {
    return (
      <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    );
  }
  if (type === "contact") {
    return (
      <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

export function AppNav() {
  const { locale, dict } = useDictionary();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-navy border-t border-white/20 safe-bottom">
      <div className="max-w-lg mx-auto flex items-stretch">
        {navItems.map(({ key, navKey, icon }) => {
          const href = localizedPath(locale, key);
          const active = pathname === href || (key !== "app" && pathname.startsWith(href));
          return (
            <Link
              key={key}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 min-h-[56px] transition-colors ${active ? "text-energy-blue" : "text-white/75"}`}
            >
              <NavIcon type={icon} active={active} />
              <span className="text-[9px] font-medium uppercase tracking-wide">{dict.app.nav[navKey]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
