"use client";

import { useMemo } from "react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { getCountryOptions } from "@/lib/countries";

type CountrySelectProps = {
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export function CountrySelect({
  id = "country",
  name = "country",
  required = false,
  disabled = false,
  className = "",
}: CountrySelectProps) {
  const { locale, dict } = useDictionary();
  const options = useMemo(() => getCountryOptions(locale), [locale]);

  return (
    <select
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      className={`portal-select ${className}`}
      defaultValue=""
    >
      <option value="">{dict.contactForm.selectCountry}</option>
      {options.map(({ code, name: countryName }) => (
        <option key={code} value={code}>
          {countryName}
        </option>
      ))}
    </select>
  );
}
