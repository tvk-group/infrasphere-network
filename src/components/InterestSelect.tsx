"use client";

import { useDictionary } from "@/i18n/DictionaryProvider";
import { INTEREST_AREA_KEYS, type InterestAreaKey } from "@/lib/contact";

type InterestSelectProps = {
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  /** Omit general inquiry (e.g. partner apply form). */
  excludeGeneral?: boolean;
};

export function InterestSelect({
  id = "interest",
  name = "interest",
  required = false,
  disabled = false,
  className = "",
  excludeGeneral = false,
}: InterestSelectProps) {
  const { dict } = useDictionary();

  const labels: Record<InterestAreaKey, string> = {
    energyInfrastructure: dict.interestAreas.energyInfrastructure,
    aiInfrastructure: dict.interestAreas.aiInfrastructure,
    smartInfrastructure: dict.interestAreas.smartInfrastructure,
    industrialTechnology: dict.interestAreas.industrialTechnology,
    modularSystems: dict.interestAreas.modularSystems,
    strategicPartnership: dict.interestAreas.strategicPartnership,
    generalInquiry: dict.interestAreas.generalInquiry,
  };

  const keys = excludeGeneral
    ? INTEREST_AREA_KEYS.filter((k) => k !== "generalInquiry")
    : INTEREST_AREA_KEYS;

  return (
    <select
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      className={className}
      defaultValue=""
    >
      <option value="">{dict.contactForm.selectArea}</option>
      {keys.map((key) => (
        <option key={key} value={key}>
          {labels[key]}
        </option>
      ))}
    </select>
  );
}
