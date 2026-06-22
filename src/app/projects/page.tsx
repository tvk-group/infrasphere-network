import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | InfraSphere Network",
  description:
    "Research initiatives, concept projects and future pilot programs — infrastructure development areas at InfraSphere Network.",
};

const categories = [
  {
    name: "Research Initiatives",
    projects: [
      {
        title: "Infrastructure Intelligence Framework",
        description:
          "Research into unified infrastructure intelligence architectures connecting energy, compute and industrial systems.",
        stage: "Current Stage: R&D",
      },
      {
        title: "Energy Systems Integration Study",
        description:
          "Research on integrating renewable energy, storage and monitoring into modular infrastructure concepts.",
        stage: "Current Stage: R&D",
      },
    ],
  },
  {
    name: "Concept Projects",
    projects: [
      {
        title: "AI Compute Infrastructure Concept",
        description:
          "Concept design for AI compute environments including GPU clusters, cooling and power optimization frameworks.",
        stage: "Current Stage: Concept",
      },
      {
        title: "Energy Monitoring Pilot Concept",
        description:
          "Concept for energy monitoring and optimization systems across industrial and infrastructure assets.",
        stage: "Current Stage: Concept",
      },
      {
        title: "Smart Industrial Monitoring Concept",
        description:
          "Concept for integrated industrial monitoring connecting OT systems with infrastructure intelligence.",
        stage: "Current Stage: Concept",
      },
    ],
  },
  {
    name: "Future Pilot Programs",
    projects: [
      {
        title: "Modular Emergency Infrastructure Concept",
        description:
          "Pilot preparation for modular emergency shelter and facility deployment concepts.",
        stage: "Current Stage: Pilot Preparation",
      },
      {
        title: "Mining Facility Infrastructure Concept",
        description:
          "Concept for mining facility infrastructure including power systems, cooling and hosting frameworks.",
        stage: "Current Stage: Pilot Preparation",
      },
    ],
  },
  {
    name: "Strategic Development Areas",
    projects: [
      {
        title: "Data Center Infrastructure Planning",
        description:
          "Strategic development of data center infrastructure concepts optimized for AI and industrial workloads.",
        stage: "Current Stage: Concept",
      },
      {
        title: "Critical Infrastructure Technology",
        description:
          "Strategic development of critical infrastructure monitoring and resilience technology concepts.",
        stage: "Current Stage: R&D",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Research, Concepts and Future Pilots"
        subtitle="Infrastructure development initiatives across research, concept formation and pilot preparation — no completed deployments claimed."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h2 className="text-xl font-semibold text-navy mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    stage={project.stage}
                    category={category.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
