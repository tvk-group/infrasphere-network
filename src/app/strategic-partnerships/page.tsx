import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Strategic Partnerships | InfraSphere Network",
  description:
    "InfraSphere Network seeks long-term collaboration with energy companies, infrastructure operators, engineering firms and strategic investors.",
};

const audiences = [
  {
    title: "Energy Companies",
    description: "Renewable energy, storage, grid and energy system operators seeking infrastructure intelligence collaboration.",
  },
  {
    title: "Infrastructure Operators",
    description: "Operators of critical infrastructure, facilities and industrial assets exploring monitoring and optimization partnerships.",
  },
  {
    title: "Industrial Holdings",
    description: "Industrial groups and manufacturing companies interested in automation, monitoring and factory intelligence concepts.",
  },
  {
    title: "Engineering Firms",
    description: "Engineering and EPC firms with expertise in energy, industrial and infrastructure system design.",
  },
  {
    title: "Data Center Operators",
    description: "Data center and colocation operators exploring AI infrastructure, cooling and power optimization collaboration.",
  },
  {
    title: "Mining Operators",
    description: "Mining facility operators interested in power systems, cooling infrastructure and hosting facility concepts.",
  },
  {
    title: "Government-Linked Institutions",
    description: "Public sector and government-linked institutions exploring infrastructure development and pilot environments.",
  },
  {
    title: "Family Offices & Strategic Investors",
    description: "Long-term strategic investors with interest in infrastructure, energy and industrial technology development.",
  },
];

export default function StrategicPartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Partnerships"
        title="Long-Term Infrastructure Collaboration"
        subtitle="InfraSphere is seeking long-term collaboration, sector expertise, pilot environments and strategic infrastructure partnerships."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">
            InfraSphere Network is in partnership exploration stage. We are seeking organizations that share
            a long-term vision for infrastructure intelligence — not short-term transactions, but strategic
            collaboration built on sector expertise and complementary capabilities.
          </p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-navy mb-4">Start a Conversation</h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">
            Whether you represent an energy company, industrial group, engineering firm or strategic investor —
            we welcome discussions about infrastructure opportunities and pilot collaboration.
          </p>
          <Button href="/contact">Discuss Infrastructure Opportunities</Button>
        </div>
      </section>
    </>
  );
}
