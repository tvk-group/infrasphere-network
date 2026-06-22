import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { Logo } from "@/components/Logo";

export function Footer() {
  const mainLinks = navItems.filter((item) => item.href !== "/");

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-4" />
            <p className="text-steel-light text-sm leading-relaxed">
              Infrastructure intelligence for the physical world. Part of the TVK ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-steel-light mb-4">Platform</h3>
            <ul className="space-y-2">
              {mainLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-steel-light mb-4">Resources</h3>
            <ul className="space-y-2">
              {mainLinks.slice(6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-steel-light mb-4">Ecosystem</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>TVK Group — Holding Layer</li>
              <li>SOVRA — Intelligence Layer</li>
              <li>EnteleKRON — Trust Layer</li>
              <li className="text-white">InfraSphere — Infrastructure Layer</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-steel-light">
            © {new Date().getFullYear()} InfraSphere Network. Currently in research and development stage.
          </p>
          <p className="text-xs text-steel-light">
            infrasphere.network
          </p>
        </div>
      </div>
    </footer>
  );
}
