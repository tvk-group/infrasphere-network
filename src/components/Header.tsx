"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-silver-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Logo />

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2.5 py-2 text-xs font-medium text-steel hover:text-navy transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-medium bg-energy-blue text-white hover:bg-[#1559b8] transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-2.5 text-sm font-medium text-center bg-energy-blue text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
