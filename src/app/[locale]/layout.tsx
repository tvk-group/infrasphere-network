import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, rtlLocales, type Locale } from "@/i18n/config";

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
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL("https://infrasphere.network"),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `https://infrasphere.network/${locale}`,
      siteName: dict.meta.siteName,
      type: "website",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: dict.meta.ogImageAlt }],
    },
    icons: {
      icon: [{ url: "/logo-mark.svg", type: "image/svg+xml" }],
      apple: [{ url: "/logo-mark.svg", type: "image/svg+xml" }],
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
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
  const dict = await getDictionary(locale);
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${ibmPlex.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <DictionaryProvider locale={locale} dict={dict}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} dict={dict} />
        </DictionaryProvider>
      </body>
    </html>
  );
}
