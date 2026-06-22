import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";

export const metadata: Metadata = {
  title: "Industrial Technology | InfraSphere Network",
  description:
    "Automation, predictive maintenance, operational technology and factory intelligence — industrial technology under development at InfraSphere Network.",
};

const technologies = [
  {
    title: "Automation",
    description:
      "Industrial automation concepts for manufacturing, processing and facility operations — designed for future integration with infrastructure intelligence.",
  },
  {
    title: "Industrial Monitoring",
    description:
      "Real-time monitoring systems for industrial assets, production lines and facility operations.",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Predictive maintenance frameworks using sensor data, analytics and operational intelligence concepts.",
  },
  {
    title: "Operational Technology",
    description:
      "OT/IT convergence concepts for industrial environments — connecting operational systems with infrastructure intelligence platforms.",
  },
  {
    title: "Digital Twin Concepts",
    description:
      "Digital twin frameworks for industrial facilities — virtual representations of physical assets for simulation and optimization.",
  },
  {
    title: "Factory Intelligence",
    description:
      "Integrated intelligence concepts for factory operations — connecting production data, energy systems and infrastructure monitoring.",
  },
];

export default function IndustrialTechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrial Technology"
        title="Industrial Systems and Operational Intelligence"
        subtitle="Automation, predictive maintenance, operational technology and factory intelligence — designed for future industrial infrastructure applications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">
            Industrial technology connects the physical operations of factories, plants and facilities with
            the broader infrastructure intelligence vision. These areas are in concept development and
            strategic architecture stage.
          </p>
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
    </>
  );
}
