interface PageHeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {eyebrow && (
          <p className="text-energy-blue text-xs font-semibold uppercase tracking-widest mb-4">{eyebrow}</p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
