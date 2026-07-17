import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { getEcosystemLayers } from "@/lib/navigation-i18n";

export function EcosystemLayers({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const layers = getEcosystemLayers(dict, locale);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {layers.map((layer) => {
        const cardClass = `block p-6 border transition-colors ${
          layer.highlight
            ? "border-energy-blue bg-energy-blue-light hover:border-energy-blue"
            : "border-silver-dark bg-white hover:border-steel"
        }`;

        const content = (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-2">{layer.role}</p>
            <p className={`text-lg font-semibold ${layer.highlight ? "text-energy-blue" : "text-navy"}`}>
              {layer.name}
            </p>
          </>
        );

        return layer.external ? (
          <a
            key={layer.href}
            href={layer.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            {content}
          </a>
        ) : (
          <Link key={layer.href} href={layer.href} className={cardClass}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
