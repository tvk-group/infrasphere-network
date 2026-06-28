import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/sitemaps") ||
    pathname === "/sitemap-index.xml" ||
    pathname.startsWith("/logo") ||
    pathname.startsWith("/og-image") ||
    pathname === "/sw.js" ||
    pathname === "/manifest.webmanifest" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (host.startsWith("app.")) {
    const appPath = pathname === "/" ? "/app" : pathname.startsWith("/app") ? pathname : `/app${pathname}`;
    const localeMatch = locales.find(
      (locale) => appPath === `/${locale}/app` || appPath.startsWith(`/${locale}/app/`)
    );

    if (localeMatch) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    if (appPath === "/app" || appPath === "/app/") {
      url.pathname = `/${defaultLocale}/app`;
    } else if (appPath.startsWith("/app/")) {
      url.pathname = `/${defaultLocale}${appPath}`;
    } else {
      url.pathname = `/${defaultLocale}/app${appPath}`;
    }
    return NextResponse.rewrite(url);
  }

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|sitemaps|sitemap-index\\.xml|.*\\..*).*)"],
};
