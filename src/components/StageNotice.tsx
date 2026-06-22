import type { Dictionary } from "@/i18n/get-dictionary";

export function StageNotice({ dict, className = "" }: { dict: Dictionary; className?: string }) {
  return (
    <div className={`bg-energy-blue-light border-l-4 border-energy-blue px-6 py-5 ${className}`}>
      <p className="text-sm text-navy leading-relaxed">
        <span className="font-semibold">{dict.stageNotice.label} </span>
        {dict.stageNotice.body}
      </p>
    </div>
  );
}
