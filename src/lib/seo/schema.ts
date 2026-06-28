import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PathKey } from "@/i18n/paths";
import { pathKeys, pathSlugs, localizedPath } from "@/i18n/paths";
import { LOGO_URL, OG_IMAGE, SITE_NAME, SITE_URL } from "./constants";
import { absoluteUrl } from "./hreflang";

export function getPageSeo(
  dict: Dictionary,
  pathKey: PathKey
): { title: string; description: string } {
  switch (pathKey) {
    case "home":
      return { title: dict.meta.title, description: dict.meta.description };
    case "about":
      return { title: dict.about.metaTitle, description: dict.about.metaDescription };
    case "infrastructure":
      return { title: dict.infrastructure.metaTitle, description: dict.infrastructure.metaDescription };
    case "energySystems":
      return { title: dict.energySystems.metaTitle, description: dict.energySystems.metaDescription };
    case "aiInfrastructure":
      return { title: dict.aiInfrastructure.metaTitle, description: dict.aiInfrastructure.metaDescription };
    case "industrialTechnology":
      return { title: dict.industrialTechnology.metaTitle, description: dict.industrialTechnology.metaDescription };
    case "modularSystems":
      return { title: dict.modularSystems.metaTitle, description: dict.modularSystems.metaDescription };
    case "projects":
      return { title: dict.projects.metaTitle, description: dict.projects.metaDescription };
    case "strategicPartnerships":
      return { title: dict.strategicPartnerships.metaTitle, description: dict.strategicPartnerships.metaDescription };
    case "insights":
      return { title: dict.insights.metaTitle, description: dict.insights.metaDescription };
    case "contact":
      return { title: dict.contact.metaTitle, description: dict.contact.metaDescription };
    case "app":
      return { title: dict.app.metaTitle, description: dict.app.metaDescription };
    case "appApply":
      return { title: dict.app.apply.metaTitle, description: dict.app.apply.metaDescription };
    case "appProjects":
      return { title: dict.app.projects.metaTitle, description: dict.app.projects.metaDescription };
    case "appContact":
      return { title: dict.app.contact.metaTitle, description: dict.app.contact.metaDescription };
    case "appInstall":
      return { title: dict.app.install.metaTitle, description: dict.app.install.metaDescription };
  }
}

export function organizationSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: dict.meta.description,
    sameAs: [SITE_URL],
    parentOrganization: {
      "@type": "Organization",
      name: "TVK Group",
    },
  };
}

export function websiteSchema(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl(localizedPath(locale, "home")),
    description: dict.meta.description,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  locale: Locale,
  dict: Dictionary,
  crumbs: { pathKey: PathKey; label: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(localizedPath(locale, crumb.pathKey)),
    })),
  };
}

export function articleSchema(
  locale: Locale,
  article: { title: string; excerpt: string; category: string },
  pathKey: PathKey = "insights"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    url: absoluteUrl(localizedPath(locale, pathKey)),
    image: OG_IMAGE,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    datePublished: "2026-01-01",
    dateModified: "2026-06-01",
  };
}

export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const allPathKeys = pathKeys;

export function getAllUrlsForLocale(locale: Locale) {
  return pathKeys.map((key) => ({
    pathKey: key,
    url: absoluteUrl(localizedPath(locale, key)),
    slug: pathSlugs[key],
  }));
}
