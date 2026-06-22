import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";

export const metadata: Metadata = {
  title: "Energy Systems | InfraSphere Network",
  description:
    "Renewable energy, energy storage, monitoring and optimization concepts — energy infrastructure under development at InfraSphere Network.",
};

const systems = [
  {
    title: "Renewable Energy",
    description:
      "Concepts for solar, wind and hybrid renewable energy systems integrated with infrastructure intelligence platforms.",
  },
  {
    title: "Energy Storage",
    description:
      "Battery storage, thermal storage and grid-scale energy storage concepts designed for future infrastructure applications.",
  },
  {
    title: "Energy Monitoring",
    description:
      "Real-time energy monitoring and metering concepts for industrial facilities, data centers and infrastructure assets.",
  },
  {
    title: "Energy Optimization",
    description:
      "Optimization frameworks for energy consumption, load balancing and efficiency across connected infrastructure systems.",
  },
  {
    title: "Industrial Energy Systems",
    description:
      "Energy management concepts for industrial operations — power distribution, backup systems and operational energy intelligence.",
  },
  {
    title: "Grid-Adjacent Concepts",
    description:
      "Strategic concepts for grid-connected infrastructure, demand response and energy system integration.",
  },
  {
    title: "EnergieMIND Integration",
    description:
      "Future integration pathway with EnergieMIND energy intelligence concepts within the broader TVK ecosystem.",
  },
];

export default function EnergySystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Energy Systems"
        title="Energy Infrastructure for the Physical World"
        subtitle="Renewable energy, storage, monitoring and optimization concepts — designed for future energy infrastructure applications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">
            Energy systems form a core pillar of InfraSphere&apos;s infrastructure vision. These areas are
            in research and concept development — designed for strategic relevance in future energy
            infrastructure initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system) => (
              <div key={system.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{system.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
