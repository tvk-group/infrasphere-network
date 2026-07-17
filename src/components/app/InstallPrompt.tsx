"use client";

import { useEffect, useState } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const { dict } = useDictionary();
  const { install } = dict.app;
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function handleInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
      setDeferredPrompt(null);
    }
  }

  if (isInstalled) {
    return (
      <div className="p-4 portal-surface border rounded-sm">
        <p className="text-sm font-medium text-accent-green">{install.installed}</p>
      </div>
    );
  }

  if (deferredPrompt) {
    return (
      <div className="p-4 portal-surface border space-y-3">
        <div>
          <p className="text-sm font-semibold text-white">{install.readyTitle}</p>
          <p className="text-sm portal-muted mt-1">{install.installPrompt}</p>
        </div>
        <button
          type="button"
          onClick={handleInstall}
          className="w-full px-4 py-2.5 bg-energy-blue text-white text-sm font-medium hover:bg-[#2a8ae6] transition-colors"
        >
          {install.installButton}
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 portal-surface border">
      <p className="text-sm font-semibold text-white">{install.readyTitle}</p>
      <p className="text-sm portal-muted mt-1">{install.readyBody}</p>
    </div>
  );
}
