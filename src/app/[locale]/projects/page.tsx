import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { ProjectCard } from "@/components/ProjectCard";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";

type StageKey = "rd" | "concept" | "pilotPreparation";

const projectStageKeys: Record<string, StageKey> = {
  infrastructureIntelligenceFramework: "rd",
  energySystemsIntegrationStudy: "rd",
  aiComputeInfrastructureConcept: "concept",
  energyMonitoringPilotConcept: "concept",
  smartIndustrialMonitoringConcept: "concept",
  modularEmergencyInfrastructureConcept: "pilotPreparation",
  miningFacilityInfrastructureConcept: "pilotPreparation",
  dataCenterInfrastructurePlanning: "concept",
  criticalInfrastructureTechnology: "rd",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.projects.metaTitle, description: dict.projects.metaDescription };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const categories = Object.values(dict.projects.categories);

  return (
    <>
      <PageHero eyebrow={dict.projects.eyebrow} title={dict.projects.title} subtitle={dict.projects.subtitle} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h2 className="text-xl font-semibold text-navy mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(category.projects).map(([projectKey, project]) => {
                  const stageKey = projectStageKeys[projectKey];
                  const stage = stageKey ? dict.projects.stages[stageKey] : "";
                  return (
                    <ProjectCard
                      key={projectKey}
                      title={project.title}
                      description={project.description}
                      stage={stage}
                      category={category.name}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
