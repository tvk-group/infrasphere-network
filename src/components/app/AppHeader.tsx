"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizedPath } from "@/i18n/paths";

export function AppHeader() {
  const { locale, dict } = useDictionary();

  return (
    <header className="sticky top-0 z-50 bg-navy text-white border-b border-white/20">
      <div className="max-w-lg mx-auto px-4 flex items-center justify-between min-h-14">
        <Link href={localizedPath(locale, "app")} className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-white">{dict.app.brand}</span>
          <span className="text-[10px] text-energy-blue uppercase tracking-widest">{dict.app.portal}</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={localizedPath(locale, "home")}
            className="hidden sm:inline text-[10px] uppercase tracking-wider portal-muted hover:text-white transition-colors"
          >
            {dict.app.openWebsite}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
