import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";

export const metadata: Metadata = {
  title: "Infrastructure | InfraSphere Network",
  description:
    "Smart infrastructure, critical infrastructure, industrial facilities and infrastructure intelligence — under development at InfraSphere Network.",
};

const areas = [
  {
    title: "Smart Infrastructure",
    description:
      "Concepts for smart buildings, connected facilities and urban infrastructure monitoring systems designed for future applications.",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Strategic relevance in critical infrastructure technology — resilience, monitoring and operational intelligence frameworks under development.",
  },
  {
    title: "Industrial Facilities",
    description:
      "Infrastructure intelligence for industrial facilities, including monitoring systems and operational data integration concepts.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Digital layers for physical infrastructure — sensor networks, data pipelines and infrastructure intelligence platforms in concept stage.",
  },
  {
    title: "Monitoring Systems",
    description:
      "Infrastructure monitoring and observability concepts designed to support energy, industrial and facility management applications.",
  },
  {
    title: "Infrastructure Intelligence",
    description:
      "The core platform vision — connecting data from physical infrastructure assets to enable strategic decision-making and optimization.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Infrastructure Intelligence Platform"
        subtitle="Smart infrastructure, critical infrastructure and industrial facilities — designed for future applications in energy, industry and physical-world technology."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">
            InfraSphere&apos;s infrastructure focus areas are under development and in pilot preparation.
            Each domain represents strategic relevance for future infrastructure initiatives within the TVK ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{area.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{area.description}</p>
                <span className="inline-block mt-4 text-xs font-medium text-steel-light uppercase tracking-wider">
                  Under Development
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
