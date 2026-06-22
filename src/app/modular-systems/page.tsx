import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";

export const metadata: Metadata = {
  title: "Modular Systems | InfraSphere Network",
  description:
    "Prefabricated infrastructure, container-based systems, emergency shelters and modular energy units — scalable physical assets under development.",
};

const systems = [
  {
    title: "Prefabricated Infrastructure",
    description:
      "Prefabricated building and facility concepts for rapid deployment — designed for industrial, energy and emergency applications.",
  },
  {
    title: "Container-Based Systems",
    description:
      "Container-based infrastructure modules for compute, energy, monitoring and operational systems — scalable and transportable.",
  },
  {
    title: "Emergency Shelters",
    description:
      "Modular emergency shelter and facility concepts for disaster response, humanitarian operations and critical infrastructure backup.",
  },
  {
    title: "Mobile Facilities",
    description:
      "Mobile infrastructure units for field operations, remote sites and temporary facility requirements.",
  },
  {
    title: "Modular Energy Units",
    description:
      "Containerized and modular energy generation and storage units — designed for rapid deployment to infrastructure sites.",
  },
  {
    title: "Scalable Industrial Structures",
    description:
      "Modular industrial building concepts that scale with operational requirements — from pilot facilities to full production environments.",
  },
];

export default function ModularSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Modular Systems"
        title="Scalable Modular Infrastructure"
        subtitle="Prefabricated systems, container-based infrastructure and modular energy units — designed for rapid deployment and scalable physical assets."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-12">
            Modular infrastructure represents a strategic capability for rapid deployment of physical assets.
            InfraSphere&apos;s modular systems concepts draw on prefabricated and container-based infrastructure
            expertise — designed for future applications across energy, industrial and emergency sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
