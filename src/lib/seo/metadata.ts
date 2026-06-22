import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PathKey } from "@/i18n/paths";
import { localizedPath } from "@/i18n/paths";
import { OG_IMAGE, SITE_NAME, TWITTER_HANDLE } from "./constants";
import { absoluteUrl, buildHreflangAlternates, hreflangCodes } from "./hreflang";

export interface PageSeoInput {
  locale: Locale;
  pathKey: PathKey;
  title: string;
  description: string;
  dict: Dictionary;
  ogImageAlt?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  locale,
  pathKey,
  title,
  description,
  dict,
  ogImageAlt,
  noIndex = false,
}: PageSeoInput): Metadata {
  const canonical = absoluteUrl(localizedPath(locale, pathKey));
  const imageAlt = ogImageAlt ?? dict.meta.ogImageAlt;

  return {
    title,
    description,
    keywords: [...dict.meta.keywords],
    alternates: {
      canonical,
      languages: buildHreflangAlternates(pathKey),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: hreflangCodes[locale],
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    other: {
      "bingbot": "index, follow",
      "yandex": "index, follow",
    },
  };
}
