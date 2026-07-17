"use client";

import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/brand/logos";

export function AppPortalBanner() {
  return (
    <div className="mt-6 -mx-4 sm:mx-0 overflow-hidden border border-white/15 bg-black">
      <Image
        src={BRAND_LOGOS.portalBanner}
        alt="InfraSphere Network — Infrastructure Intelligence for the Physical World"
        width={1200}
        height={400}
        className="w-full h-auto object-contain"
        sizes="(max-width: 512px) 100vw, 480px"
        priority={false}
      />
    </div>
  );
}
