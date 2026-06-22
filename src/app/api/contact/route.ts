import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  type ContactFormData,
  INTEREST_AREAS,
  escapeHtml,
  isValidEmail,
} from "@/lib/contact";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function validatePayload(body: unknown): { ok: true; data: ContactFormData } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;

  if (record.website) {
    return { ok: false, error: "Unable to process request." };
  }

  const name = typeof record.name === "string" ? record.name.trim() : "";
  const company = typeof record.company === "string" ? record.company.trim() : "";
  const role = typeof record.role === "string" ? record.role.trim() : "";
  const country = typeof record.country === "string" ? record.country.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const interest = typeof record.interest === "string" ? record.interest.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";

  if (!name || name.length > 120) return { ok: false, error: "Name is required." };
  if (!company || company.length > 160) return { ok: false, error: "Company is required." };
  if (!email || !isValidEmail(email) || email.length > 254) return { ok: false, error: "Valid email is required." };
  if (!interest || !INTEREST_AREAS.includes(interest as (typeof INTEREST_AREAS)[number])) {
    return { ok: false, error: "Please select a valid area of interest." };
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return { ok: false, error: "Message must be between 10 and 5000 characters." };
  }
  if (role.length > 120) return { ok: false, error: "Role is too long." };
  if (country.length > 120) return { ok: false, error: "Country is too long." };

  return {
    ok: true,
    data: { name, company, role, country, email, interest, message },
  };
}

function buildEmailHtml(data: ContactFormData): string {
  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Role", data.role || "—"],
    ["Country", data.country || "—"],
    ["Email", data.email],
    ["Area of Interest", data.interest],
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validatePayload(body);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { data } = validation;

    if (!resend) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "InfraSphere Network <onboarding@resend.dev>";

    if (!toEmail) {
      console.error("CONTACT_TO_EMAIL is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `[InfraSphere] ${data.interest} — ${data.company}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send your inquiry. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
