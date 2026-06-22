export interface ContactFormData {
  name: string;
  company: string;
  role?: string;
  country?: string;
  email: string;
  interest: string;
  message: string;
}

export const INTEREST_AREAS = [
  "Energy Infrastructure",
  "AI Infrastructure",
  "Smart Infrastructure",
  "Industrial Technology",
  "Modular Systems",
  "Strategic Partnership",
  "General Inquiry",
] as const;

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
