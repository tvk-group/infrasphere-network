import { NextResponse } from "next/server";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo/constants";

export async function GET() {
  const sitemaps = locales
    .map(
      (locale) =>
        `  <sitemap>\n    <loc>${SITE_URL}/sitemaps/${locale}.xml</loc>\n  </sitemap>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
