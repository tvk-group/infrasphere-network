import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { EcosystemLayers } from "@/components/EcosystemLayers";
import { FocusAreaCard } from "@/components/FocusAreaCard";
import { StageNotice } from "@/components/StageNotice";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { getFocusAreas } from "@/lib/navigation-i18n";
import { localizedPath } from "@/i18n/paths";
import { generatePageMetadata } from "@/lib/seo/page-metadata";
import { PageSeoSchemas } from "@/components/seo/PageSeoSchemas";
import { InternalLinks } from "@/components/seo/InternalLinks";
import { FaqSection } from "@/components/seo/FaqSection";

function HeroVisual({ labels }: { labels: { power: string; compute: string; monitor: string } }) {
  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-[480px] bg-navy-light overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a6fd4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-3">
          <div className="flex gap-3">
            <div className="flex-1 h-24 bg-white/5 border border-white/10 p-3">
              <div className="h-2 w-16 bg-energy-blue/60 mb-3" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10" />
                <div className="h-1.5 w-3/4 bg-white/10" />
                <div className="h-1.5 w-1/2 bg-white/10" />
              </div>
            </div>
            <div className="flex-1 h-24 bg-white/5 border border-white/10 p-3">
              <div className="h-2 w-12 bg-accent-green/60 mb-3" />
              <div className="flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-energy-blue/30" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { key: "power", label: labels.power },
              { key: "compute", label: labels.compute },
              { key: "monitor", label: labels.monitor },
            ].map(({ key, label }) => (
              <div key={key} className="h-16 bg-white/5 border border-white/10 p-2 flex flex-col justify-between">
                <span className="text-[10px] text-white/40 uppercase tracking-wider">{label}</span>
                <div className="h-1 w-full bg-gradient-to-r from-energy-blue/40 to-accent-green/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "home");
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const focusAreas = getFocusAreas(locale, dict);
  const whyCards = [
    dict.home.whyCards.energySystems,
    dict.home.whyCards.aiCompute,
    dict.home.whyCards.industrialOt,
    dict.home.whyCards.modularAssets,
  ];

  return (
    <>
      <PageSeoSchemas locale={locale} dict={dict} pathKey="home" includeFaq />
      <section className="bg-navy text-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col justify-center">
              <p className="text-energy-blue text-xs font-semibold uppercase tracking-widest mb-6">{dict.home.heroEyebrow}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">{dict.home.heroTitle}</h1>
              <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">{dict.home.heroSubtitle}</p>
              <p className="mt-4 text-sm text-white/50">{dict.home.heroTags}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={localizedPath(locale, "infrastructure")}>{dict.common.explorePlatform}</Button>
                <Button href={localizedPath(locale, "strategicPartnerships")} variant="outline" className="!text-white !border-white/30 hover:!text-energy-blue hover:!border-energy-blue">
                  {dict.common.strategicPartnershipInquiry}
                </Button>
              </div>
            </div>
            <HeroVisual labels={dict.home.heroVisual} />
          </div>
        </div>
      </section>

      <div className="site-container py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16 lg:py-24 bg-silver">
        <div className="site-container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">{dict.home.ecosystemTitle}</h2>
            <p className="mt-4 text-steel leading-relaxed">{dict.home.ecosystemBody}</p>
          </div>
          <EcosystemLayers dict={dict} />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">{dict.home.focusTitle}</h2>
            <p className="mt-4 text-steel">{dict.home.focusSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <FocusAreaCard key={area.title} {...area} learnMore={dict.common.learnMore} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{dict.home.whyTitle}</h2>
              <p className="mt-6 text-white/70 leading-relaxed">{dict.home.whyBody1}</p>
              <p className="mt-4 text-white/70 leading-relaxed">{dict.home.whyBody2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyCards.map((item) => (
                <div key={item.label} className="p-6 bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-energy-blue mb-2">{item.label}</p>
                  <p className="text-sm text-white/60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-energy-blue-light">
        <div className="site-container text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">{dict.home.partnershipsTitle}</h2>
          <p className="mt-4 text-steel max-w-2xl mx-auto leading-relaxed">{dict.home.partnershipsBody}</p>
          <div className="mt-8">
            <Button href={localizedPath(locale, "contact")}>{dict.common.discussInfrastructureOpportunities}</Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-energy-blue text-xs font-semibold uppercase tracking-widest mb-4">{dict.home.getApp.eyebrow}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{dict.home.getApp.title}</h2>
              <p className="mt-4 text-white/70 leading-relaxed">{dict.home.getApp.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={localizedPath(locale, "app")}>{dict.home.getApp.cta}</Button>
                <Button href={localizedPath(locale, "appInstall")} variant="outline" className="!text-white !border-white/30 hover:!text-energy-blue hover:!border-energy-blue">
                  {dict.home.getApp.install}
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-[480px] bg-navy-light border border-white/10 rounded-3xl p-4 shadow-2xl">
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <span className="text-xs font-semibold">{dict.app.brand}</span>
                    <span className="text-[9px] text-energy-blue uppercase tracking-widest">{dict.app.portal}</span>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-3 bg-white/5 border border-white/10">
                        <div className="h-1.5 w-12 bg-energy-blue/60 mb-2" />
                        <div className="h-1 w-full bg-white/10" />
                        <div className="h-1 w-3/4 bg-white/10 mt-1" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-around pt-3 border-t border-white/10">
                    {["Dashboard", "Apply", "Projects"].map((label) => (
                      <div key={label} className="w-8 h-1 bg-white/20 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title={dict.seo.faqTitle}
        items={dict.seo.faq.map((item) => ({ question: item.question, answer: item.answer }))}
      />
      <InternalLinks locale={locale} dict={dict} pathKey="home" />
    </>
  );
}
