import type { Locale } from "./config";
import { en } from "./messages/en";
import type { Dictionary } from "./get-dictionary";
import { localePatches, type LocalePatch } from "./app-locale-patches";

type GetAppStrings = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  install: string;
};

type AppOverlay = {
  navApp: string;
  getApp: GetAppStrings;
  app: Dictionary["app"];
};

const enOverlay: AppOverlay = { navApp: en.nav.app, getApp: en.home.getApp, app: en.app };

function buildOverlay(patch: LocalePatch): AppOverlay {
  const app = JSON.parse(JSON.stringify(en.app)) as Dictionary["app"];
  Object.assign(app, {
    metaTitle: `${patch.portal} | InfraSphere Network`,
    metaDescription: patch.dashboardSubtitle,
    portal: patch.portal,
    tagline: patch.tagline,
    openWebsite: patch.openWebsite,
    stageBadge: patch.stageBadge,
    nav: patch.nav,
    dashboard: {
      welcome: patch.welcome,
      subtitle: patch.dashboardSubtitle,
      quickActions: patch.quickActions,
      stats: patch.stats,
      cards: patch.cards,
      notice: patch.notice,
      ecosystem: patch.ecosystem,
    },
    apply: {
      ...app.apply,
      metaTitle: `${patch.apply.title} | InfraSphere ${patch.portal}`,
      metaDescription: patch.apply.subtitle,
      title: patch.apply.title,
      subtitle: patch.apply.subtitle,
      organizationType: patch.apply.organizationType,
      selectType: patch.apply.selectType,
      orgTypes: patch.apply.orgTypes,
      successTitle: patch.apply.successTitle,
      successBody: patch.apply.successBody,
    },
    projects: {
      ...app.projects,
      metaTitle: `${patch.projects.title} | InfraSphere ${patch.portal}`,
      metaDescription: patch.projects.subtitle,
      title: patch.projects.title,
      subtitle: patch.projects.subtitle,
      stages: patch.projects.stages,
    },
    contact: {
      ...app.contact,
      metaTitle: `${patch.contact.title} | InfraSphere ${patch.portal}`,
      metaDescription: patch.contact.subtitle,
      title: patch.contact.title,
      subtitle: patch.contact.subtitle,
    },
    install: {
      ...app.install,
      metaTitle: `${patch.install.title} | InfraSphere ${patch.portal}`,
      metaDescription: patch.install.subtitle,
      title: patch.install.title,
      subtitle: patch.install.subtitle,
      ios: patch.install.ios,
      android: patch.install.android,
      desktop: patch.install.desktop,
    },
  });
  return { navApp: patch.navApp, getApp: patch.getApp, app };
}

const overlays: Partial<Record<Locale, AppOverlay>> = {};
for (const [locale, patch] of Object.entries(localePatches)) {
  overlays[locale as Locale] = buildOverlay(patch);
}

export function getAppOverlay(locale: Locale): AppOverlay {
  return overlays[locale] ?? enOverlay;
}
