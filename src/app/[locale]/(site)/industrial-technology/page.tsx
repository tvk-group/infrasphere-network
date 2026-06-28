import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { SubPageSeo, SubPageFooter } from "@/components/seo/SubPageSeo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "industrialTechnology");
}

export default async function IndustrialTechnologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const technologies = Object.values(dict.industrialTechnology.technologies);

  return (
    <>
      <SubPageSeo locale={locale} dict={dict} pathKey="industrialTechnology" />
      <PageHero
        eyebrow={dict.industrialTechnology.eyebrow}
        title={dict.industrialTechnology.title}
        subtitle={dict.industrialTechnology.subtitle}
      />

      <div className="site-container py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16">
        <div className="site-container">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">{dict.industrialTechnology.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div key={tech.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{tech.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubPageFooter locale={locale} dict={dict} pathKey="industrialTechnology" />
    </>
  );
}
