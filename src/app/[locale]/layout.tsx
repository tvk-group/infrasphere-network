import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
import { isLocale, locales, rtlLocales, type Locale } from "@/i18n/config";
import { htmlLangCodes } from "@/lib/seo/hreflang";
import { SITE_URL } from "@/lib/seo/constants";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";

  return {
    metadataBase: new URL(SITE_URL),
    manifest: `/${locale}/manifest.webmanifest`,
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "InfraSphere",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={htmlLangCodes[locale]} dir={dir} className={`${ibmPlex.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#0a1628" />
        <link rel="icon" href="/brand/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
