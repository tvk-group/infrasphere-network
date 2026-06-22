import Link from "next/link";
import { FocusIcon } from "./icons";

interface FocusAreaCardProps {
  title: string;
  description: string;
  href: string;
  icon: "energy" | "ai" | "smart" | "industrial" | "modular" | "mining";
}

export function FocusAreaCard({ title, description, href, icon }: FocusAreaCardProps) {
  return (
    <Link
      href={href}
      className="group block p-8 bg-white border border-silver-dark hover:border-energy-blue/40 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-silver text-navy group-hover:bg-energy-blue-light group-hover:text-energy-blue transition-colors mb-6">
        <FocusIcon type={icon} className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-energy-blue transition-colors">
        {title}
      </h3>
      <p className="text-sm text-steel leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-xs font-medium text-energy-blue opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more →
      </span>
    </Link>
  );
}
