"use client";

import { Logo } from "@/components/Logo";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface LogoClientProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
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
