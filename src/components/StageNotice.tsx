export function StageNotice({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-energy-blue-light border-l-4 border-energy-blue px-6 py-5 ${className}`}>
      <p className="text-sm text-navy leading-relaxed">
        <span className="font-semibold">Development Stage Notice: </span>
        InfraSphere Network is currently in research, development, concept formation and pilot preparation stage.
        The platform is being designed to support future infrastructure, energy and industrial technology initiatives
        within the TVK ecosystem.
      </p>
    </div>
  );
}
