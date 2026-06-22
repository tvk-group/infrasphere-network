import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { Button } from "@/components/Button";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/paths";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.aiInfrastructure.metaTitle, description: dict.aiInfrastructure.metaDescription };
}

export default async function AIInfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const capabilities = Object.values(dict.aiInfrastructure.capabilities);

  return (
    <>
      <PageHero
        eyebrow={dict.aiInfrastructure.eyebrow}
        title={dict.aiInfrastructure.title}
        subtitle={dict.aiInfrastructure.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-4">{dict.aiInfrastructure.intro1}</p>
          <p className="text-steel leading-relaxed max-w-3xl mb-12">{dict.aiInfrastructure.intro2}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{cap.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-navy mb-4">{dict.aiInfrastructure.partnershipsTitle}</h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">{dict.aiInfrastructure.partnershipsBody}</p>
          <Button href={localizedPath(locale, "contact")}>{dict.common.discussAIInfrastructureOpportunities}</Button>
        </div>
      </section>
    </>
  );
}
