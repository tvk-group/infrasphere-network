import { ecosystemLayers } from "@/lib/navigation";

export function EcosystemLayers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ecosystemLayers.map((layer) => (
        <div
          key={layer.name}
          className={`p-6 border ${
            "highlight" in layer && layer.highlight
              ? "border-energy-blue bg-energy-blue-light"
              : "border-silver-dark bg-white"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-steel mb-2">{layer.role}</p>
          <p className={`text-lg font-semibold ${"highlight" in layer && layer.highlight ? "text-energy-blue" : "text-navy"}`}>
            {layer.name}
          </p>
        </div>
      ))}
    </div>
  );
}
