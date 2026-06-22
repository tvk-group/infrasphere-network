"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/DictionaryProvider";

function swapLocaleInPath(pathname: string, newLocale: Locale): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  }
  return `/${newLocale}`;
}

export function LanguageSwitcher() {
  const { locale } = useDictionary();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectLanguage(newLocale: Locale) {
    setOpen(false);
    router.push(swapLocaleInPath(pathname, newLocale));
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-steel hover:text-navy border border-silver-dark hover:border-energy-blue/40 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M12 3c-2.2 2.4-3.3 5.4-3.3 9s1.1 6.6 3.3 9c2.2-2.4 3.3-5.4 3.3-9s-1.1-6.6-3.3-9z" />
        </svg>
        <span className="max-w-[72px] truncate">{localeNames[locale]}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 w-48 max-h-72 overflow-y-auto bg-white border border-silver-dark shadow-lg z-50"
        >
          {locales.map((loc) => (
            <li key={loc} role="option" aria-selected={loc === locale}>
              <button
                type="button"
                onClick={() => selectLanguage(loc)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-silver transition-colors ${
                  loc === locale ? "text-energy-blue font-medium bg-energy-blue-light/50" : "text-navy"
                }`}
              >
                {localeNames[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
