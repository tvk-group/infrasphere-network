import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PathKey } from "@/i18n/paths";
import { JsonLd } from "./JsonLd";
import {
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  articleSchema,
  faqSchema,
} from "@/lib/seo/schema";
import { breadcrumbItems } from "./Breadcrumbs";

interface PageSeoSchemasProps {
  locale: Locale;
  dict: Dictionary;
  pathKey: PathKey;
  includeFaq?: boolean;
  includeArticles?: boolean;
}

export function PageSeoSchemas({
  locale,
  dict,
  pathKey,
  includeFaq = false,
  includeArticles = false,
}: PageSeoSchemasProps) {
  const schemas: Record<string, unknown>[] = [
    organizationSchema(dict),
    websiteSchema(dict, locale),
    breadcrumbSchema(locale, dict, breadcrumbItems(dict, pathKey)),
  ];

  if (includeFaq) {
    schemas.push(
      faqSchema(
        dict.seo.faq.map((item) => ({ question: item.question, answer: item.answer }))
      )
    );
  }

  if (includeArticles) {
    const articles = Object.values(dict.insights.articles);
    for (const article of articles) {
      schemas.push(articleSchema(locale, article));
    }
  }

  return <JsonLd data={schemas} />;
}
