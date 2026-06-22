import Link from "next/link";
import { Logo } from "@/components/Logo";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getNavItems } from "@/lib/navigation-i18n";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const allLinks = getNavItems(locale, dict);
  const mainLinks = allLinks.filter((item) => item.href !== `/${locale}`);

  const platformLinks = mainLinks.filter((_, i) => i < 6);
  const resourceLinks = mainLinks.filter((_, i) => i >= 6);

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-4" locale={locale} brand={dict.logo.brand} network={dict.logo.network} />
            <p className="text-steel-light text-sm leading-relaxed">{dict.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-steel-light mb-4">{dict.footer.platform}</h3>
            <ul className="space-y-2">
              {platformLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-steel-light mb-4">{dict.footer.resources}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-steel-light mb-4">{dict.footer.ecosystem}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{dict.ecosystem.tvkGroup} — {dict.ecosystem.holdingLayer}</li>
              <li>{dict.ecosystem.sovra} — {dict.ecosystem.intelligenceLayer}</li>
              <li>{dict.ecosystem.enteleKron} — {dict.ecosystem.trustLayer}</li>
              <li className="text-white">{dict.ecosystem.infraSphere} — {dict.ecosystem.infrastructureLayer}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs text-steel-light leading-relaxed max-w-4xl">{dict.seo.legalDisclaimer}</p>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs text-steel-light">
              {dict.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
            </p>
            <p className="text-xs text-steel-light">{dict.footer.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
