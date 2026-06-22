import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/get-dictionary";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

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
    <html lang={htmlLangCodes[locale]} dir={dir} className={`${ibmPlex.variable} h-full`}>
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
