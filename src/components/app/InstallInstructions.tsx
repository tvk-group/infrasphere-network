"use client";

import { useDictionary } from "@/i18n/DictionaryProvider";
import { InstallPrompt } from "./InstallPrompt";

export function InstallInstructions() {
  const { dict } = useDictionary();
  const { install } = dict.app;

  const platforms = [
    { key: "ios" as const, data: install.ios },
    { key: "android" as const, data: install.android },
    { key: "desktop" as const, data: install.desktop },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white tracking-tight">{install.title}</h1>
        <p className="mt-2 text-sm portal-muted leading-relaxed">{install.subtitle}</p>
      </div>

      <InstallPrompt />

      {platforms.map(({ key, data }) => (
        <div key={key} className="p-4 portal-surface border">
          <h2 className="text-sm font-semibold text-energy-blue mb-3">{data.title}</h2>
          <ol className="space-y-2">
            {data.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm portal-muted">
                <span className="shrink-0 w-5 h-5 flex items-center justify-center bg-energy-blue/25 text-energy-blue text-xs font-semibold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
