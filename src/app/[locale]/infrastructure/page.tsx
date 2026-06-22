import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.infrastructure.metaTitle, description: dict.infrastructure.metaDescription };
}

export default async function InfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const areas = Object.values(dict.infrastructure.areas);

  return (
    <>
      <PageHero
        eyebrow={dict.infrastructure.eyebrow}
        title={dict.infrastructure.title}
        subtitle={dict.infrastructure.subtitle}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">{dict.infrastructure.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{area.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{area.description}</p>
                <span className="inline-block mt-4 text-xs font-medium text-steel-light uppercase tracking-wider">
                  {dict.common.underDevelopment}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
