import { NextResponse } from "next/server";
import { sendContactEmail, isBrevoConfigured } from "@/lib/brevo";
import {
  type ContactFormData,
  isValidEmail,
  isValidInterestKey,
} from "@/lib/contact";
import { COUNTRY_CODES } from "@/lib/countries";
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/supabase/server";

function isValidCountryCode(value: string): boolean {
  return (COUNTRY_CODES as readonly string[]).includes(value);
}

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
  if (!interest || !isValidInterestKey(interest)) {
    return { ok: false, error: "Please select a valid area of interest." };
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return { ok: false, error: "Message must be between 10 and 5000 characters." };
  }
  if (role.length > 120) return { ok: false, error: "Role is too long." };
  if (country && !isValidCountryCode(country)) {
    return { ok: false, error: "Please select a valid country." };
  }

  return {
    ok: true,
    data: { name, company, role, country, email, interest, message },
  };
}

function detectSource(message: string): string {
  return message.startsWith("[Partner Portal Application]") ? "partner_portal" : "website";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validatePayload(body);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { data } = validation;

    if (!isSupabaseConfigured() || !isBrevoConfigured()) {
      console.error("Contact service not configured.", {
        supabase: isSupabaseConfigured(),
        brevo: isBrevoConfigured(),
      });
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const { error: dbError } = await supabase.from("contact_inquiries").insert({
      name: data.name,
      company: data.company,
      role: data.role || null,
      country: data.country || null,
      email: data.email,
      interest: data.interest,
      message: data.message,
      source: detectSource(data.message),
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save your inquiry. Please try again later." },
        { status: 502 }
      );
    }

    const emailResult = await sendContactEmail(data);
    if (!emailResult.ok) {
      console.error("Brevo send failed after DB save:", emailResult.error);
      // Submission is stored — still return success to the user.
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
