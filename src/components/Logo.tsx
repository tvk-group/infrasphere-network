import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/paths";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
  locale?: Locale;
  brand?: string;
  network?: string;
}

export function Logo({
  variant = "dark",
  showText = true,
  className = "",
  locale = "en",
  brand = "InfraSphere",
  network = "Network",
}: LogoProps) {
  return (
    <Link href={localizedPath(locale, "home")} className={`flex items-center gap-3 shrink-0 ${className}`}>
      <Image src="/logo-mark.svg" alt="" width={36} height={36} className="w-9 h-9" priority />
      {showText && (
        <div className="hidden sm:block">
          <span className={`font-semibold text-sm tracking-wide ${variant === "light" ? "text-white" : "text-navy"}`}>
            {brand}
          </span>
          <span className={`text-xs block -mt-0.5 ${variant === "light" ? "text-steel-light" : "text-steel"}`}>
            {network}
          </span>
        </div>
      )}
    </Link>
  );
}
