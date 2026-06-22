"use client";

import { useState } from "react";
import { INTEREST_AREAS } from "@/lib/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      role: formData.get("role"),
      country: formData.get("country"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send your inquiry. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 bg-accent-green-light border border-accent-green/20">
        <h3 className="text-lg font-semibold text-navy mb-2">Thank you for your inquiry</h3>
        <p className="text-sm text-steel">
          Your message has been received. Our team will review your infrastructure partnership inquiry and respond accordingly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-sm text-red-800" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="interest" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
          Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          required
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60"
        >
          <option value="">Select an area</option>
          {INTEREST_AREAS.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-steel mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue resize-y disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3 bg-energy-blue text-white text-sm font-medium hover:bg-[#1559b8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Discuss Infrastructure Opportunities"}
      </button>
    </form>
  );
}
