import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return children;

  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <DictionaryProvider locale={locale} dict={dict}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
    </DictionaryProvider>
  );
}
