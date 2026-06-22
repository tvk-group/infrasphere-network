import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.insights.metaTitle, description: dict.insights.metaDescription };
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const categories = Object.values(dict.insights.categories);
  const articles = Object.values(dict.insights.articles);

  return (
    <>
      <PageHero eyebrow={dict.insights.eyebrow} title={dict.insights.title} subtitle={dict.insights.subtitle} />

      <section className="py-8 border-b border-silver-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 text-xs font-medium text-steel bg-silver border border-silver-dark"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="p-8 bg-white border border-silver-dark group hover:border-energy-blue/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-energy-blue bg-energy-blue-light px-2.5 py-1">
                    {article.category}
                  </span>
                  <span className="text-xs text-steel-light">2026</span>
                </div>
                <h2 className="text-lg font-semibold text-navy mb-3 group-hover:text-energy-blue transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-steel leading-relaxed">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
