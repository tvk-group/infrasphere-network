"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoClient } from "@/components/LogoClient";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizedPath } from "@/i18n/paths";
import { getNavItems } from "@/lib/navigation-i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale, dict } = useDictionary();
  const navItems = getNavItems(locale, dict);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver-dark">
      <div className="site-container">
        <div className="flex items-center justify-between gap-3 min-h-16 py-2">
          <div className="shrink-0">
            <LogoClient logoVariant="full-light" className="mb-0" />
          </div>

          <nav
            className="hidden lg:flex flex-1 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 px-1 min-w-0"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-1.5 py-1 text-[10px] xl:text-[11px] 2xl:text-xs font-medium text-steel hover:text-navy transition-colors leading-tight text-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0 gap-2">
            <Link
              href={localizedPath(locale, "app")}
              className="px-2 py-1 text-[10px] xl:text-xs font-semibold uppercase tracking-wider text-energy-blue border border-energy-blue/30 hover:bg-energy-blue-light transition-colors"
            >
              {dict.nav.app}
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-2 text-navy"
              onClick={() => setOpen(!open)}
              aria-label={dict.common.toggleMenu}
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-silver-dark bg-white max-h-[70vh] overflow-y-auto">
          <nav className="site-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-steel hover:text-navy hover:bg-silver transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localizedPath(locale, "app")}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-energy-blue hover:bg-energy-blue-light transition-colors"
            >
              {dict.nav.app}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
