import { notFound } from "next/navigation";
import { AppProjectPipeline } from "@/components/app/AppProjectPipeline";
import { isLocale } from "@/i18n/config";
import { generateAppMetadata } from "@/lib/seo/app-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateAppMetadata(locale, "appProjects");
}

export default async function AppProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  return <AppProjectPipeline />;
}
