"use client";

import { useState } from "react";

const interestAreas = [
  "Energy Infrastructure",
  "AI Infrastructure",
  "Smart Infrastructure",
  "Industrial Technology",
  "Modular Systems",
  "Strategic Partnership",
  "General Inquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue"
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
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue"
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
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue"
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
            className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue"
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
          className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue"
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
          className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue"
        >
          <option value="">Select an area</option>
          {interestAreas.map((area) => (
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
          className="w-full px-4 py-3 border border-silver-dark bg-white text-navy text-sm focus:outline-none focus:border-energy-blue resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-energy-blue text-white text-sm font-medium hover:bg-[#1559b8] transition-colors"
      >
        Discuss Infrastructure Opportunities
      </button>
    </form>
  );
}
