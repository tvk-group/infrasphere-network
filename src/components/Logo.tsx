import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/paths";
import { getLogoSrc, LOGO_DIMENSIONS, type LogoVariant } from "@/lib/brand/logos";

interface LogoProps {
  /** @deprecated Use logoVariant instead */
  variant?: "light" | "dark";
  logoVariant?: LogoVariant;
  showText?: boolean;
  className?: string;
  locale?: Locale;
  href?: string;
  brand?: string;
  network?: string;
}

function resolveVariant(props: LogoProps): LogoVariant {
  if (props.logoVariant) return props.logoVariant;
  return props.variant === "light" ? "full-dark-horizontal" : "full-light";
}

export function Logo({
  variant = "dark",
  logoVariant,
  showText = false,
  className = "",
  locale = "en",
  href,
  brand = "InfraSphere",
  network = "Network",
}: LogoProps) {
  const resolved = resolveVariant({ variant, logoVariant });
  const src = getLogoSrc(resolved);
  const dims = LOGO_DIMENSIONS[resolved];
  const linkHref = href ?? localizedPath(locale, "home");
  const alt = `${brand} ${network}`;

  return (
    <Link href={linkHref} className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={dims.width}
        height={dims.height}
        className={dims.className}
        priority
      />
      {showText && resolved === "mark-dark" && (
        <div className="ml-2.5 hidden sm:block leading-tight">
          <span className="font-semibold text-sm tracking-tight text-white">{brand}</span>
          <span className="text-[10px] block text-energy-blue uppercase tracking-widest">{network}</span>
        </div>
      )}
    </Link>
  );
}
