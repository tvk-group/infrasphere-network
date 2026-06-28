import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { SubPageSeo, SubPageFooter } from "@/components/seo/SubPageSeo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <SubPageSeo locale={locale} dict={dict} pathKey="contact" />
      <PageHero eyebrow={dict.contact.eyebrow} title={dict.contact.title} subtitle={dict.contact.subtitle} />

      <section className="py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-navy mb-6">{dict.contact.getInTouchTitle}</h2>
              <p className="text-steel text-sm leading-relaxed mb-8">{dict.contact.getInTouchBody}</p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-1">{dict.contact.platformLabel}</p>
                  <p className="text-sm text-navy">{dict.footer.domain}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-1">{dict.contact.ecosystemLabel}</p>
                  <p className="text-sm text-navy">{dict.contact.ecosystemValue}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-1">{dict.contact.stageLabel}</p>
                  <p className="text-sm text-navy">{dict.contact.stageValue}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <SubPageFooter locale={locale} dict={dict} pathKey="contact" />
    </>
  );
}
