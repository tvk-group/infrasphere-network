import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | InfraSphere Network",
  description:
    "Contact InfraSphere Network for infrastructure partnership inquiries, pilot collaboration and strategic development discussions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss Infrastructure Opportunities"
        subtitle="Connect with InfraSphere Network for strategic partnership inquiries, pilot collaboration and infrastructure development discussions."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-navy mb-6">Get in Touch</h2>
              <p className="text-steel text-sm leading-relaxed mb-8">
                InfraSphere Network welcomes inquiries from energy companies, infrastructure operators,
                industrial groups, engineering firms, technology providers and strategic investors.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-1">Platform</p>
                  <p className="text-sm text-navy">infrasphere.network</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-1">Ecosystem</p>
                  <p className="text-sm text-navy">TVK Group · InfraSphere Network</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-1">Stage</p>
                  <p className="text-sm text-navy">Research · Development · Pilot Preparation</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
