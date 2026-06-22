export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Energy Systems", href: "/energy-systems" },
  { label: "AI Infrastructure", href: "/ai-infrastructure" },
  { label: "Industrial Technology", href: "/industrial-technology" },
  { label: "Modular Systems", href: "/modular-systems" },
  { label: "Projects", href: "/projects" },
  { label: "Strategic Partnerships", href: "/strategic-partnerships" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const ecosystemLayers = [
  { name: "TVK Group", role: "Holding Layer" },
  { name: "SOVRA", role: "Intelligence Layer" },
  { name: "EnteleKRON", role: "Trust Layer" },
  { name: "InfraSphere", role: "Infrastructure Layer", highlight: true },
] as const;

export const focusAreas = [
  {
    title: "Energy Infrastructure",
    description:
      "Renewable energy, energy storage, monitoring and optimization concepts.",
    href: "/energy-systems",
    icon: "energy",
  },
  {
    title: "AI Infrastructure",
    description:
      "GPU clusters, AI compute environments, edge infrastructure and data center concepts.",
    href: "/ai-infrastructure",
    icon: "ai",
  },
  {
    title: "Smart Infrastructure",
    description:
      "Smart buildings, smart cities, IoT monitoring and infrastructure intelligence.",
    href: "/infrastructure",
    icon: "smart",
  },
  {
    title: "Industrial Technology",
    description:
      "Automation, predictive maintenance, operational technology and industrial systems.",
    href: "/industrial-technology",
    icon: "industrial",
  },
  {
    title: "Modular Infrastructure",
    description:
      "Prefabricated systems, container-based infrastructure, emergency facilities and scalable physical assets.",
    href: "/modular-systems",
    icon: "modular",
  },
  {
    title: "Mining Infrastructure",
    description:
      "Power systems, cooling systems, hosting concepts and mining facility infrastructure.",
    href: "/projects",
    icon: "mining",
  },
] as const;
