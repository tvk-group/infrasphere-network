import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StageNotice } from "@/components/StageNotice";
import { ProjectCard } from "@/components/ProjectCard";
import { SubPageSeo, SubPageFooter } from "@/components/seo/SubPageSeo";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/page-metadata";

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata(locale, "projects");
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const categories = Object.values(dict.projects.categories);

  return (
    <>
      <SubPageSeo locale={locale} dict={dict} pathKey="projects" />
      <PageHero eyebrow={dict.projects.eyebrow} title={dict.projects.title} subtitle={dict.projects.subtitle} />

      <div className="site-container py-8">
        <StageNotice dict={dict} />
      </div>

      <section className="py-16">
        <div className="site-container space-y-16">
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
      <SubPageFooter locale={locale} dict={dict} pathKey="projects" />
    </>
  );
}
