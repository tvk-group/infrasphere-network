import { notFound } from "next/navigation";
import { InstallInstructions } from "@/components/app/InstallInstructions";
import { isLocale } from "@/i18n/config";
import { generateAppMetadata } from "@/lib/seo/app-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateAppMetadata(locale, "appInstall");
}

export default async function AppInstallPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  return <InstallInstructions />;
}
