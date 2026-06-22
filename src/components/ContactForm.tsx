"use client";

import { useState } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function ContactForm() {
  const { dict } = useDictionary();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const interestAreas = [
    dict.interestAreas.energyInfrastructure,
    dict.interestAreas.aiInfrastructure,
    dict.interestAreas.smartInfrastructure,
    dict.interestAreas.industrialTechnology,
    dict.interestAreas.modularSystems,
    dict.interestAreas.strategicPartnership,
    dict.interestAreas.generalInquiry,
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          role: formData.get("role"),
          country: formData.get("country"),
          email: formData.get("email"),
          interest: formData.get("interest"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error || dict.contactForm.errorSendFailed);
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(dict.contactForm.errorNetwork);
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 bg-accent-green-light border border-accent-green/20">
        <h3 className="text-lg font-semibold text-navy mb-2">{dict.contactForm.successTitle}</h3>
        <p className="text-sm text-steel">{dict.contactForm.successBody}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue disabled:opacity-60";
  const labelClass = "block text-xs font-medium uppercase tracking-wider text-steel mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 text-sm text-red-800" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>{dict.contactForm.name}</label>
          <input type="text" id="name" name="name" required disabled={status === "submitting"} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>{dict.contactForm.company}</label>
          <input type="text" id="company" name="company" required disabled={status === "submitting"} className={inputClass} />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>{dict.contactForm.role}</label>
          <input type="text" id="role" name="role" disabled={status === "submitting"} className={inputClass} />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>{dict.contactForm.country}</label>
          <input type="text" id="country" name="country" disabled={status === "submitting"} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>{dict.contactForm.email}</label>
        <input type="email" id="email" name="email" required disabled={status === "submitting"} className={inputClass} />
      </div>
      <div>
        <label htmlFor="interest" className={labelClass}>{dict.contactForm.areaOfInterest}</label>
        <select id="interest" name="interest" required disabled={status === "submitting"} className={inputClass}>
          <option value="">{dict.contactForm.selectArea}</option>
          {interestAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>{dict.contactForm.message}</label>
        <textarea id="message" name="message" rows={5} required minLength={10} disabled={status === "submitting"} className={`${inputClass} resize-y`} />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3 bg-energy-blue text-white text-sm font-medium hover:bg-[#1559b8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? dict.common.sending : dict.contactForm.submit}
      </button>
    </form>
  );
}
