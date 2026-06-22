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
  return { title: dict.strategicPartnerships.metaTitle, description: dict.strategicPartnerships.metaDescription };
}

export default async function StrategicPartnershipsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const audiences = Object.values(dict.strategicPartnerships.audiences);

  return (
    <>
      <PageHero
        eyebrow={dict.strategicPartnerships.eyebrow}
        title={dict.strategicPartnerships.title}
        subtitle={dict.strategicPartnerships.subtitle}
      />

      <div className="site-container py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16">
        <div className="site-container">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">{dict.strategicPartnerships.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{audience.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-energy-blue-light">
        <div className="site-container text-center">
          <h2 className="text-xl font-semibold text-navy mb-4">{dict.common.startConversation}</h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">{dict.strategicPartnerships.ctaBody}</p>
          <Button href={localizedPath(locale, "contact")}>{dict.common.discussInfrastructureOpportunities}</Button>
        </div>
      </section>
    </>
  );
}
