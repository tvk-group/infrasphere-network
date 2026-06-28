import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { generateAppMetadata } from "@/lib/seo/app-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateAppMetadata(locale, "appContact");
}

export default async function AppContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const dict = await getDictionary(localeParam);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white tracking-tight">{dict.app.contact.title}</h1>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{dict.app.contact.subtitle}</p>
      </div>
      <div className="app-contact-form">
        <ContactForm />
      </div>
    </div>
  );
}
