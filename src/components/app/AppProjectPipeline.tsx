"use client";

import { useDictionary } from "@/i18n/DictionaryProvider";

const stageColors: Record<string, string> = {
  research: "bg-energy-blue/20 text-energy-blue",
  concept: "bg-accent-green/20 text-accent-green",
  pilot: "bg-white/10 text-white/70",
};

export function AppProjectPipeline() {
  const { dict } = useDictionary();
  const p = dict.app.projects;
  const { stages } = dict.app.projects;

  const items = [
    {
      stage: "research" as const,
      title: dict.projects.categories.researchInitiatives.projects.infrastructureIntelligenceFramework.title,
      description: dict.projects.categories.researchInitiatives.projects.infrastructureIntelligenceFramework.description,
    },
    {
      stage: "research" as const,
      title: dict.projects.categories.researchInitiatives.projects.energySystemsIntegrationStudy.title,
      description: dict.projects.categories.researchInitiatives.projects.energySystemsIntegrationStudy.description,
    },
    {
      stage: "concept" as const,
      title: dict.projects.categories.conceptProjects.projects.aiComputeInfrastructureConcept.title,
      description: dict.projects.categories.conceptProjects.projects.aiComputeInfrastructureConcept.description,
    },
    {
      stage: "concept" as const,
      title: dict.projects.categories.conceptProjects.projects.energyMonitoringPilotConcept.title,
      description: dict.projects.categories.conceptProjects.projects.energyMonitoringPilotConcept.description,
    },
    {
      stage: "concept" as const,
      title: dict.projects.categories.conceptProjects.projects.smartIndustrialMonitoringConcept.title,
      description: dict.projects.categories.conceptProjects.projects.smartIndustrialMonitoringConcept.description,
    },
    {
      stage: "pilot" as const,
      title: dict.projects.categories.futurePilotPrograms.projects.modularEmergencyInfrastructureConcept.title,
      description: dict.projects.categories.futurePilotPrograms.projects.modularEmergencyInfrastructureConcept.description,
    },
    {
      stage: "pilot" as const,
      title: dict.projects.categories.strategicDevelopmentAreas.projects.dataCenterInfrastructurePlanning.title,
      description: dict.projects.categories.strategicDevelopmentAreas.projects.dataCenterInfrastructurePlanning.description,
    },
    {
      stage: "pilot" as const,
      title: dict.projects.categories.strategicDevelopmentAreas.projects.criticalInfrastructureTechnology.title,
      description: dict.projects.categories.strategicDevelopmentAreas.projects.criticalInfrastructureTechnology.description,
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-white tracking-tight">{p.title}</h1>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.subtitle}</p>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.title} className="p-4 bg-white/5 border border-white/10">
            <span className={`inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider mb-2 ${stageColors[item.stage]}`}>
              {stages[item.stage]}
            </span>
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
