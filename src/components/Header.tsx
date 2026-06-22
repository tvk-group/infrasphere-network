"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoClient } from "@/components/LogoClient";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { getNavItems } from "@/lib/navigation-i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale, dict } = useDictionary();
  const navItems = getNavItems(locale, dict);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-4">
          <LogoClient />

          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center min-w-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-xs font-medium text-steel hover:text-navy transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <LanguageSwitcher />
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-2 text-navy"
              onClick={() => setOpen(!open)}
              aria-label={dict.common.toggleMenu}
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
        <div className="xl:hidden border-t border-silver-dark bg-white max-h-[70vh] overflow-y-auto">
          <nav className="px-4 py-4 flex flex-col gap-1">
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
          </nav>
        </div>
      )}
    </header>
  );
}
