import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "AI Infrastructure | InfraSphere Network",
  description:
    "AI compute environments, GPU clusters, data center concepts and edge infrastructure — AI infrastructure under development at InfraSphere Network.",
};

const capabilities = [
  {
    title: "AI Compute Environments",
    description:
      "Concepts for dedicated AI compute environments supporting training, inference and model deployment workloads.",
  },
  {
    title: "GPU Clusters",
    description:
      "GPU cluster architecture concepts for high-performance AI workloads — designed for future data center and edge deployments.",
  },
  {
    title: "Data Center Concepts",
    description:
      "Next-generation data center design concepts optimized for AI workloads, including power, cooling and connectivity planning.",
  },
  {
    title: "Edge Infrastructure",
    description:
      "Edge compute infrastructure concepts for distributed AI processing closer to industrial and infrastructure assets.",
  },
  {
    title: "Cooling Systems",
    description:
      "Advanced cooling concepts for high-density compute environments — liquid cooling, immersion and thermal management.",
  },
  {
    title: "Power Optimization",
    description:
      "Power delivery and optimization concepts for AI infrastructure — PUE targets, renewable integration and load management.",
  },
  {
    title: "AI Infrastructure Planning",
    description:
      "Strategic planning frameworks for AI infrastructure deployment — capacity planning, site selection and ecosystem integration.",
  },
];

export default function AIInfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="AI Infrastructure"
        title="AI Compute Infrastructure for Strategic Development"
        subtitle="GPU clusters, data center concepts, edge infrastructure and power optimization — AI infrastructure designed for the TVK ecosystem's technology ambitions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel leading-relaxed max-w-3xl mb-4">
            AI infrastructure represents a strategic priority within InfraSphere Network. As AI capabilities
            become central to industrial, energy and infrastructure operations, the physical compute layer
            must be planned with the same rigor as energy and facility infrastructure.
          </p>
          <p className="text-steel leading-relaxed max-w-3xl mb-12">
            These concepts are in research and development — designed for future applications and pilot preparation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-8 bg-white border border-silver-dark">
                <h3 className="text-lg font-semibold text-navy mb-3">{cap.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-navy mb-4">AI Infrastructure Partnerships</h2>
          <p className="text-steel max-w-2xl mx-auto mb-8">
            InfraSphere is exploring collaboration with data center operators, technology providers and
            infrastructure partners for AI compute environment development.
          </p>
          <Button href="/contact">Discuss AI Infrastructure Opportunities</Button>
        </div>
      </section>
    </>
  );
}
