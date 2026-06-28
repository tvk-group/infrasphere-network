import type { MetadataRoute } from "next";

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
        src: "/logo-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
