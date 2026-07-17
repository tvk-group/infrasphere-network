"use client";

import Image from "next/image";

const BANNER_SRC = "/partner-portal-banner.png";

export function AppPortalBanner() {
  return (
    <div className="portal-banner mt-6 -mx-4 sm:mx-0">
      <div className="portal-banner__frame">
        <Image
          src={BANNER_SRC}
          alt="InfraSphere Network — Infrastructure Intelligence for the Physical World"
          width={1200}
          height={675}
          className="portal-banner__image"
          sizes="(max-width: 512px) 100vw, 480px"
          priority={false}
        />
        <div className="portal-banner__fade portal-banner__fade--top" aria-hidden="true" />
        <div className="portal-banner__fade portal-banner__fade--bottom" aria-hidden="true" />
        <div className="portal-banner__fade portal-banner__fade--left" aria-hidden="true" />
        <div className="portal-banner__fade portal-banner__fade--right" aria-hidden="true" />
      </div>
    </div>
  );
}
