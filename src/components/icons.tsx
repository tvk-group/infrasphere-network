export function IconEnergy({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAI({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconSmart({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function IconIndustrial({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20h20M4 20V10l4-2v12M10 20V6l4-2v16M16 20V12l4-2v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconModular({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="10" rx="1" />
      <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
      <path d="M12 18v2" />
    </svg>
  );
}

export function IconMining({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M8 6h8M6 10h12v10a2 2 0 01-2 2H8a2 2 0 01-2-2V10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14h4M10 17h4" strokeLinecap="round" />
    </svg>
  );
}

const iconMap = {
  energy: IconEnergy,
  ai: IconAI,
  smart: IconSmart,
  industrial: IconIndustrial,
  modular: IconModular,
  mining: IconMining,
} as const;

export function FocusIcon({ type, className }: { type: keyof typeof iconMap; className?: string }) {
  const Icon = iconMap[type];
  return <Icon className={className} />;
}
