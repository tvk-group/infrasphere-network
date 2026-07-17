"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { localizedPath } from "@/i18n/paths";
import { BRAND_LOGOS, LOGO_DIMENSIONS } from "@/lib/brand/logos";

export function AppHeader() {
  const { locale, dict } = useDictionary();
  const dims = LOGO_DIMENSIONS["full-dark-horizontal"];

  return (
    <header className="sticky top-0 z-50 bg-navy text-white border-b border-white/20">
      <div className="max-w-lg mx-auto px-4 flex items-center justify-between min-h-14 gap-3">
        <Link href={localizedPath(locale, "app")} className="inline-flex items-center shrink-0 min-w-0">
          <Image
            src={BRAND_LOGOS.fullDarkHorizontal}
            alt={`${dict.logo.brand} ${dict.app.portal}`}
            width={dims.width}
            height={dims.height}
            className={dims.className}
            priority
          />
        </Link>
        <div className="flex items-center gap-2 shrink-0">
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
