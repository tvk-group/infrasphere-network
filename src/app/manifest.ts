import type { MetadataRoute } from "next";
import { BRAND_LOGOS } from "@/lib/brand/logos";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InfraSphere Partner Portal",
    short_name: "InfraSphere",
    description:
      "Infrastructure partnership portal for strategic partners — applications, project pipeline and collaboration tools.",
    start_url: "/en/app",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#0a1628",
    orientation: "portrait-primary",
    icons: [
      {
        src: BRAND_LOGOS.favicon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: BRAND_LOGOS.favicon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
