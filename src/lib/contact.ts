export interface ContactFormData {
  name: string;
  company: string;
  role?: string;
  country?: string;
  email: string;
  interest: string;
  message: string;
}

export const INTEREST_AREA_KEYS = [
  "energyInfrastructure",
  "aiInfrastructure",
  "smartInfrastructure",
  "industrialTechnology",
  "modularSystems",
  "strategicPartnership",
  "generalInquiry",
] as const;

export type InterestAreaKey = (typeof INTEREST_AREA_KEYS)[number];

/** English labels used in notification emails. */
export const INTEREST_AREAS: Record<InterestAreaKey, string> = {
  energyInfrastructure: "Energy Infrastructure",
  aiInfrastructure: "AI Infrastructure",
  smartInfrastructure: "Smart Infrastructure",
  industrialTechnology: "Industrial Technology",
  modularSystems: "Modular Systems",
  strategicPartnership: "Strategic Partnership",
  generalInquiry: "General Inquiry",
};

export function isValidInterestKey(value: string): value is InterestAreaKey {
  return (INTEREST_AREA_KEYS as readonly string[]).includes(value);
}

export function getInterestLabel(key: InterestAreaKey): string {
  return INTEREST_AREAS[key];
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
