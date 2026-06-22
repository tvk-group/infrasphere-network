import { Button } from "@/components/Button";
import { EcosystemLayers } from "@/components/EcosystemLayers";
import { FocusAreaCard } from "@/components/FocusAreaCard";
import { StageNotice } from "@/components/StageNotice";
import { focusAreas } from "@/lib/navigation";

function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-[480px] bg-navy-light overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a6fd4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-3">
          <div className="flex gap-3">
            <div className="flex-1 h-24 bg-white/5 border border-white/10 p-3">
              <div className="h-2 w-16 bg-energy-blue/60 mb-3" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10" />
                <div className="h-1.5 w-3/4 bg-white/10" />
                <div className="h-1.5 w-1/2 bg-white/10" />
              </div>
            </div>
            <div className="flex-1 h-24 bg-white/5 border border-white/10 p-3">
              <div className="h-2 w-12 bg-accent-green/60 mb-3" />
              <div className="flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-energy-blue/30" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-32 bg-white/5 border border-white/10 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="h-2 w-24 bg-white/20" />
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-green/80" />
                <div className="w-2 h-2 rounded-full bg-energy-blue/80" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
            </div>
            <svg viewBox="0 0 300 60" className="w-full h-12">
              <polyline
                fill="none"
                stroke="#1a6fd4"
                strokeWidth="1.5"
                points="0,50 30,35 60,40 90,20 120,30 150,15 180,25 210,10 240,20 270,5 300,15"
              />
            </svg>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Power", "Compute", "Monitor"].map((label) => (
              <div key={label} className="h-16 bg-white/5 border border-white/10 p-2 flex flex-col justify-between">
                <span className="text-[10px] text-white/40 uppercase tracking-wider">{label}</span>
                <div className="h-1 w-full bg-gradient-to-r from-energy-blue/40 to-accent-green/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-energy-blue/50 to-transparent" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col justify-center">
              <p className="text-energy-blue text-xs font-semibold uppercase tracking-widest mb-6">
                TVK Ecosystem · Infrastructure Layer
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Infrastructure Intelligence for the Physical World
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                InfraSphere Network is being developed as the infrastructure, energy systems and industrial
                technology platform of the TVK ecosystem.
              </p>
              <p className="mt-4 text-sm text-white/50">
                Energy Infrastructure · AI Infrastructure · Smart Systems · Industrial Technology · Modular Infrastructure
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/infrastructure" variant="primary">Explore the Platform</Button>
                <Button href="/strategic-partnerships" variant="outline" className="!text-white !border-white/30 hover:!text-energy-blue hover:!border-energy-blue">
                  Strategic Partnership Inquiry
                </Button>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StageNotice />
      </div>

      <section className="py-16 lg:py-24 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
              The Physical Infrastructure Layer of the TVK Ecosystem
            </h2>
            <p className="mt-4 text-steel leading-relaxed">
              InfraSphere connects energy systems, industrial infrastructure, AI compute environments, modular
              infrastructure and physical-world technology initiatives into a future-focused platform.
            </p>
          </div>
          <EcosystemLayers />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">Core Focus Areas</h2>
            <p className="mt-4 text-steel">
              Six strategic domains forming the foundation of infrastructure intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <FocusAreaCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why InfraSphere</h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                The next wave of technology will require physical infrastructure: energy, compute, data centers,
                industrial systems and resilient facilities.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                InfraSphere exists to connect these domains under one strategic infrastructure vision — designed
                for future applications across the TVK ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Energy Systems", value: "Storage · Grid · Renewables" },
                { label: "AI Compute", value: "GPU · Edge · Data Centers" },
                { label: "Industrial OT", value: "Automation · Monitoring" },
                { label: "Modular Assets", value: "Container · Prefab · Mobile" },
              ].map((item) => (
                <div key={item.label} className="p-6 bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-energy-blue mb-2">{item.label}</p>
                  <p className="text-sm text-white/60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-energy-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">Strategic Partnerships</h2>
          <p className="mt-4 text-steel max-w-2xl mx-auto leading-relaxed">
            InfraSphere Network seeks collaboration with energy companies, infrastructure operators, industrial
            groups, engineering firms, technology providers and strategic investors.
          </p>
          <div className="mt-8">
            <Button href="/contact">Discuss Infrastructure Opportunities</Button>
          </div>
        </div>
      </section>
    </>
  );
}
