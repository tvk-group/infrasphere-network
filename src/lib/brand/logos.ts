/**
 * InfraSphere Network brand logo set.
 *
 * Replace files in /public/brand/ with your official assets (same filenames):
 * - logo-1-full-light.png           — full logo on light backgrounds (website header)
 * - logo-2-mark-dark.png            — icon mark on dark backgrounds (favicon, PWA)
 * - logo-3-full-dark.png            — stacked full logo on dark backgrounds
 * - logo-3-full-dark-horizontal.png — horizontal full logo on dark (headers, banner)
 */

export const BRAND_LOGOS = {
  fullLight: "/brand/logo-1-full-light.png",
  markDark: "/brand/logo-2-mark-dark.png",
  fullDark: "/brand/logo-3-full-dark.png",
  fullDarkHorizontal: "/brand/logo-3-full-dark-horizontal.png",
  favicon32: "/brand/favicon-32.png",
  favicon192: "/brand/favicon-192.png",
  favicon512: "/brand/favicon-512.png",
  appleTouchIcon: "/brand/apple-touch-icon.png",
} as const;

export type LogoVariant = "full-light" | "full-dark" | "full-dark-horizontal" | "mark-dark";

export function getLogoSrc(variant: LogoVariant): string {
  switch (variant) {
    case "full-light":
      return BRAND_LOGOS.fullLight;
    case "full-dark":
      return BRAND_LOGOS.fullDark;
    case "full-dark-horizontal":
      return BRAND_LOGOS.fullDarkHorizontal;
    case "mark-dark":
      return BRAND_LOGOS.markDark;
  }
}

/** Display dimensions per variant (width × height). Sizes are 2× the previous defaults. */
export const LOGO_DIMENSIONS: Record<LogoVariant, { width: number; height: number; className: string }> = {
  "full-light": { width: 480, height: 132, className: "h-20 sm:h-[5.5rem] w-auto" },
  "full-dark": { width: 560, height: 240, className: "h-20 sm:h-24 w-auto brand-logo-on-dark" },
  "full-dark-horizontal": {
    width: 640,
    height: 160,
    className: "h-[4.5rem] sm:h-20 w-auto max-w-full brand-logo-on-dark",
  },
  "mark-dark": { width: 80, height: 80, className: "h-[4.5rem] w-[4.5rem] brand-logo-on-dark" },
};

/** CSS class that removes opaque black backgrounds on dark surfaces. */
export const LOGO_ON_DARK_CLASS = "brand-logo-on-dark";
