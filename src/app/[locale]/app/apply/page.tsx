import { notFound } from "next/navigation";
import { AppApplyForm } from "@/components/app/AppApplyForm";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { generateAppMetadata } from "@/lib/seo/app-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateAppMetadata(locale, "appApply");
}

export default async function AppApplyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const dict = await getDictionary(localeParam);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white tracking-tight">{dict.app.apply.title}</h1>
        <p className="mt-2 text-sm portal-muted leading-relaxed">{dict.app.apply.subtitle}</p>
      </div>
      <AppApplyForm />
    </div>
  );
}
