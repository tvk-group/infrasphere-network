"use client";

import Image from "next/image";

const BANNER_SRC = "/partner-portal-banner.png";

export function AppPortalBanner() {
  return (
    <div className="mt-6 -mx-4 sm:mx-0 overflow-hidden border border-white/15 bg-navy-light">
      <Image
        src={BANNER_SRC}
        alt="InfraSphere Network — Infrastructure Intelligence for the Physical World"
        width={1200}
        height={675}
        className="w-full h-auto object-cover"
        sizes="(max-width: 512px) 100vw, 480px"
        priority={false}
      />
    </div>
  );
}
