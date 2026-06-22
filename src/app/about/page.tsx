import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { EcosystemLayers } from "@/components/EcosystemLayers";

export const metadata: Metadata = {
  title: "About | InfraSphere Network",
  description:
    "Learn about InfraSphere Network's mission, vision and strategic role as the physical infrastructure layer of the TVK ecosystem.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About InfraSphere"
        title="Building the Infrastructure Layer for the Physical World"
        subtitle="InfraSphere Network is being developed as the infrastructure, energy systems and industrial technology platform within the TVK ecosystem."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">Mission</h2>
              <p className="text-steel leading-relaxed">
                InfraSphere Network aims to support the development of energy infrastructure, smart infrastructure,
                AI infrastructure, industrial technology, modular systems, data center concepts and critical
                infrastructure innovation — connecting physical-world technology initiatives under one strategic vision.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy mb-4">Vision</h2>
              <p className="text-steel leading-relaxed">
                To build a future-focused infrastructure ecosystem where energy, intelligence, industrial systems
                and digital technologies work together — designed for long-term strategic development across
                the TVK ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-navy mb-4">Strategic Role in the TVK Ecosystem</h2>
          <p className="text-steel leading-relaxed max-w-3xl mb-10">
            Within the TVK ecosystem, InfraSphere serves as the physical infrastructure layer — connecting
            energy systems, industrial facilities, AI compute environments and modular infrastructure concepts
            into a cohesive platform architecture.
          </p>
          <EcosystemLayers />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-navy mb-4">Current Development Stage</h2>
          <p className="text-steel leading-relaxed max-w-3xl mb-8">
            InfraSphere Network is currently in research, development, concept formation, strategic architecture
            and pilot preparation stage. The platform is being designed to support future infrastructure initiatives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Research", "Development", "Concept Formation", "Pilot Preparation", "Partnership Exploration"].map(
              (stage) => (
                <div key={stage} className="p-4 bg-white border border-silver-dark text-center">
                  <p className="text-sm font-medium text-navy">{stage}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold mb-4">Long-Term Infrastructure Thesis</h2>
          <p className="text-white/70 leading-relaxed max-w-3xl">
            The convergence of energy systems, AI compute infrastructure, industrial automation and modular
            physical assets represents a fundamental shift in how infrastructure is planned, deployed and
            operated. InfraSphere is being developed to address this convergence — not as a product launch,
            but as a long-term strategic infrastructure platform designed for future applications within
            the TVK ecosystem and beyond.
          </p>
        </div>
      </section>
    </>
  );
}
