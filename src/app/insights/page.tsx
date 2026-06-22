import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Insights | InfraSphere Network",
  description:
    "Infrastructure intelligence perspectives on energy, AI infrastructure, industrial technology, smart systems and modular infrastructure.",
};

const categories = [
  "Energy Infrastructure",
  "AI Infrastructure",
  "Industrial Technology",
  "Smart Systems",
  "Modular Infrastructure",
  "Data Centers",
  "Critical Infrastructure",
  "Sustainability",
];

const articles = [
  {
    title: "The Convergence of Energy and AI Infrastructure",
    category: "AI Infrastructure",
    excerpt:
      "As AI compute demands grow, the intersection of energy systems and data center infrastructure becomes a strategic priority for infrastructure planning.",
    date: "2026",
  },
  {
    title: "Modular Infrastructure for Rapid Deployment",
    category: "Modular Infrastructure",
    excerpt:
      "Prefabricated and container-based systems offer scalable pathways for deploying physical infrastructure assets across diverse operational environments.",
    date: "2026",
  },
  {
    title: "Infrastructure Intelligence: A Platform Vision",
    category: "Smart Systems",
    excerpt:
      "Connecting monitoring, energy and operational data from physical assets into unified infrastructure intelligence frameworks.",
    date: "2026",
  },
  {
    title: "Industrial OT/IT Convergence Concepts",
    category: "Industrial Technology",
    excerpt:
      "The integration of operational technology with digital infrastructure layers represents a key development area for industrial systems.",
    date: "2026",
  },
  {
    title: "Renewable Energy Storage for Infrastructure Sites",
    category: "Energy Infrastructure",
    excerpt:
      "Energy storage concepts designed for integration with industrial facilities, data centers and modular infrastructure deployments.",
    date: "2026",
  },
  {
    title: "Data Center Cooling for High-Density AI Workloads",
    category: "Data Centers",
    excerpt:
      "Advanced cooling approaches for next-generation data center environments supporting GPU-intensive AI compute requirements.",
    date: "2026",
  },
  {
    title: "Critical Infrastructure Resilience Frameworks",
    category: "Critical Infrastructure",
    excerpt:
      "Strategic concepts for monitoring, redundancy and operational resilience in critical infrastructure technology.",
    date: "2026",
  },
  {
    title: "Sustainable Infrastructure Development Pathways",
    category: "Sustainability",
    excerpt:
      "Approaches to integrating sustainability principles into infrastructure planning across energy, industrial and modular systems.",
    date: "2026",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Infrastructure Intelligence Perspectives"
        subtitle="Analysis and perspectives on energy infrastructure, AI compute, industrial technology and the future of physical-world systems."
      />

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
              <article key={article.title} className="p-8 bg-white border border-silver-dark group hover:border-energy-blue/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-energy-blue bg-energy-blue-light px-2.5 py-1">
                    {article.category}
                  </span>
                  <span className="text-xs text-steel-light">{article.date}</span>
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
