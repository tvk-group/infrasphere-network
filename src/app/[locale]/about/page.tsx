import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { EcosystemLayers } from "@/components/EcosystemLayers";
import { SubPageSeo, SubPageFooter } from "@/components/seo/SubPageSeo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const stages = [
    dict.about.stages.research,
    dict.about.stages.development,
    dict.about.stages.conceptFormation,
    dict.about.stages.pilotPreparation,
    dict.about.stages.partnershipExploration,
  ];

  return (
    <>
      <SubPageSeo locale={locale} dict={dict} pathKey="about" />
      <PageHero eyebrow={dict.about.eyebrow} title={dict.about.title} subtitle={dict.about.subtitle} />

      <div className="site-container py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">{dict.about.missionTitle}</h2>
              <p className="text-steel leading-relaxed">{dict.about.missionBody}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">{dict.about.visionTitle}</h2>
              <p className="text-steel leading-relaxed">{dict.about.visionBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-silver">
        <div className="site-container">
          <h2 className="text-xl font-semibold text-navy mb-4">{dict.about.strategicRoleTitle}</h2>
          <p className="text-steel leading-relaxed max-w-3xl mb-10">{dict.about.strategicRoleBody}</p>
          <EcosystemLayers dict={dict} />
        </div>
      </section>

      <section className="py-16">
        <div className="site-container">
          <h2 className="text-xl font-semibold text-navy mb-4">{dict.about.developmentStageTitle}</h2>
          <p className="text-steel leading-relaxed max-w-3xl mb-8">{dict.about.developmentStageBody}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stages.map((stage) => (
              <div key={stage} className="p-4 bg-white border border-silver-dark text-center">
                <p className="text-sm font-medium text-navy">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="site-container">
          <h2 className="text-xl font-semibold mb-4">{dict.about.thesisTitle}</h2>
          <p className="text-white/70 leading-relaxed max-w-3xl">{dict.about.thesisBody}</p>
        </div>
      </section>
      <SubPageFooter locale={locale} dict={dict} pathKey="about" />
    </>
  );
}
