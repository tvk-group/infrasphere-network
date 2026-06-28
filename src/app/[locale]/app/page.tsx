import { notFound } from "next/navigation";
import { AppDashboard } from "@/components/app/AppDashboard";
import { isLocale, type Locale } from "@/i18n/config";
import { generateAppMetadata } from "@/lib/seo/app-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateAppMetadata(locale, "app");
}

export default async function AppDashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  return <AppDashboard />;
}
