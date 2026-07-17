import { notFound } from "next/navigation";
import { AppHeader } from "@/components/app/AppHeader";
import { AppNav } from "@/components/app/AppNav";
import { AppPortalBanner } from "@/components/app/AppPortalBanner";
import { ServiceWorkerRegister } from "@/components/app/ServiceWorkerRegister";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export default async function AppLayout({
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

  return (
    <DictionaryProvider locale={locale} dict={dict}>
      <div className="app-portal min-h-dvh bg-navy flex flex-col">
        <ServiceWorkerRegister />
        <AppHeader />
        <main className="flex-1 flex flex-col max-w-lg mx-auto w-full px-4 pt-6 pb-24">
          <div className="flex-1">{children}</div>
          <AppPortalBanner />
        </main>
        <AppNav />
      </div>
    </DictionaryProvider>
  );
}
