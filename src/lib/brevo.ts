import type { ContactFormData } from "@/lib/contact";
import { escapeHtml, getInterestLabel, isValidInterestKey } from "@/lib/contact";

export function isBrevoConfigured(): boolean {
  return Boolean(
    process.env.BREVO_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      (process.env.CONTACT_FROM_EMAIL || process.env.BREVO_SENDER_EMAIL)
  );
}

function parseSender(): { name: string; email: string } {
  const from = process.env.CONTACT_FROM_EMAIL;
  if (from) {
    const match = from.match(/^(.+?)\s*<([^>]+)>$/);
    if (match) return { name: match[1].trim(), email: match[2].trim() };
    return { name: "InfraSphere Network", email: from.trim() };
  }

  return {
    name: process.env.BREVO_SENDER_NAME || "InfraSphere Network",
    email: process.env.BREVO_SENDER_EMAIL || "noreply@infrasphere.network",
  };
}

function buildEmailHtml(data: ContactFormData): string {
  const interestLabel = isValidInterestKey(data.interest) ? getInterestLabel(data.interest) : data.interest;

  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Role", data.role || "—"],
    ["Country", data.country || "—"],
    ["Email", data.email],
    ["Area of Interest", interestLabel],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e8ecf0;font-weight:600;color:#0a1628;width:140px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e8ecf0;color:#5a6578;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:600px;">
      <h2 style="color:#0a1628;margin:0 0 16px;">Infrastructure Partnership Inquiry</h2>
      <p style="color:#5a6578;margin:0 0 20px;">A new inquiry was submitted via infrasphere.network.</p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">${tableRows}</table>
      <h3 style="color:#0a1628;margin:0 0 8px;">Message</h3>
      <p style="color:#5a6578;white-space:pre-wrap;margin:0;">${escapeHtml(data.message)}</p>
    </div>
  `;
}

export async function sendContactEmail(data: ContactFormData): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return { ok: false, error: "Brevo is not configured." };
  }

  const sender = parseSender();
  const interestLabel = isValidInterestKey(data.interest) ? getInterestLabel(data.interest) : data.interest;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender,
      to: [{ email: toEmail }],
      replyTo: { email: data.email, name: data.name },
      subject: `[InfraSphere] ${interestLabel} — ${data.company}`,
      htmlContent: buildEmailHtml(data),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Brevo API error:", response.status, body);
    return { ok: false, error: "Failed to send notification email." };
  }

  return { ok: true };
}
