import { notFound } from "next/navigation";
import type { MetadataRoute } from "next";
import { isLocale, rtlLocales, type Locale } from "@/i18n/config";
import { BRAND_LOGOS } from "@/lib/brand/logos";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  const manifest: MetadataRoute.Manifest = {
    name: "InfraSphere Partner Portal",
    short_name: "InfraSphere",
    description:
      "Infrastructure partnership portal for strategic partners — applications, project pipeline and collaboration tools.",
    start_url: `/${locale}/app`,
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#0a1628",
    orientation: "portrait-primary",
    icons: [
      {
        src: BRAND_LOGOS.favicon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: BRAND_LOGOS.favicon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity"],
    lang: locale,
    dir,
    scope: "/",
  };

  return Response.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
