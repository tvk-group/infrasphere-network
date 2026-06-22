import { NextResponse } from "next/server";
import { isLocale, type Locale } from "@/i18n/config";
import { pathKeys, localizedPath } from "@/i18n/paths";
import { absoluteUrl, buildHreflangXmlLinks } from "@/lib/seo/hreflang";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const locale = localeParam as Locale;
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = pathKeys
    .map((pathKey) => {
      const loc = absoluteUrl(localizedPath(locale, pathKey));
      const hreflangLinks = buildHreflangXmlLinks(pathKey);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${pathKey === "home" ? "1.0" : "0.8"}</priority>
    ${hreflangLinks}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
