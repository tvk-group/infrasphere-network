import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PathKey } from "@/i18n/paths";
import { PageSeoSchemas } from "./PageSeoSchemas";
import { Breadcrumbs, breadcrumbItems } from "./Breadcrumbs";
import { InternalLinks } from "./InternalLinks";

interface SubPageSeoProps {
  locale: Locale;
  dict: Dictionary;
  pathKey: PathKey;
  includeArticles?: boolean;
}

export function SubPageSeo({ locale, dict, pathKey, includeArticles }: SubPageSeoProps) {
  return (
    <>
      <PageSeoSchemas
        locale={locale}
        dict={dict}
        pathKey={pathKey}
        includeArticles={includeArticles}
      />
      <Breadcrumbs locale={locale} dict={dict} items={breadcrumbItems(dict, pathKey)} />
    </>
  );
}

export function SubPageFooter({ locale, dict, pathKey }: Omit<SubPageSeoProps, "includeArticles">) {
  return <InternalLinks locale={locale} dict={dict} pathKey={pathKey} />;
}
