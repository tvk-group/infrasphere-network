"use client";

import { Logo } from "@/components/Logo";
import { useDictionary } from "@/i18n/DictionaryProvider";
import type { LogoVariant } from "@/lib/brand/logos";

interface LogoClientProps {
  variant?: "light" | "dark";
  logoVariant?: LogoVariant;
  showText?: boolean;
  className?: string;
  href?: string;
}

export function LogoClient(props: LogoClientProps) {
  const { locale, dict } = useDictionary();
  return (
    <Logo
      {...props}
      locale={locale}
      brand={dict.logo.brand}
      network={dict.logo.network}
    />
  );
}
