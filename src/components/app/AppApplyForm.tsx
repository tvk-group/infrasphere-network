"use client";

import { useState } from "react";
import { CountrySelect } from "@/components/CountrySelect";
import { InterestSelect } from "@/components/InterestSelect";
import { useDictionary } from "@/i18n/DictionaryProvider";

export function AppApplyForm() {
  const { dict } = useDictionary();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const orgTypes = Object.entries(dict.app.apply.orgTypes);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const orgTypeKey = formData.get("orgType") as string;
    const orgTypeLabel = dict.app.apply.orgTypes[orgTypeKey as keyof typeof dict.app.apply.orgTypes] ?? orgTypeKey;

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
          message: `[Partner Portal Application]\nOrganization Type: ${orgTypeLabel}\n\n${formData.get("message")}`,
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
      <div className="p-6 bg-accent-green/15 border border-accent-green/40">
        <h3 className="text-base font-semibold text-white mb-2">{dict.app.apply.successTitle}</h3>
        <p className="text-sm text-white/85">{dict.app.apply.successBody}</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-3 py-2.5 border border-white/20 bg-white/10 text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-energy-blue focus:ring-1 focus:ring-energy-blue/50 disabled:opacity-60";
  const labelClass = "block text-[10px] font-semibold uppercase tracking-wider text-white/80 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <div className="p-3 bg-red-500/15 border border-red-400/40 text-sm text-red-200" role="alert">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="orgType" className={labelClass}>{dict.app.apply.organizationType}</label>
        <select id="orgType" name="orgType" required disabled={status === "submitting"} className={inputClass}>
          <option value="">{dict.app.apply.selectType}</option>
          {orgTypes.map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <CountrySelect disabled={status === "submitting"} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>{dict.contactForm.email}</label>
        <input type="email" id="email" name="email" required disabled={status === "submitting"} className={inputClass} />
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>{dict.contactForm.areaOfInterest}</label>
        <InterestSelect excludeGeneral disabled={status === "submitting"} className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{dict.contactForm.message}</label>
        <textarea id="message" name="message" rows={4} required minLength={10} disabled={status === "submitting"} className={`${inputClass} resize-y`} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 bg-energy-blue text-white text-sm font-medium hover:bg-[#1559b8] transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? dict.common.sending : dict.contactForm.submit}
      </button>
    </form>
  );
}
