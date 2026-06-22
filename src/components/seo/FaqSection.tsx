interface FaqSectionProps {
  title: string;
  items: { question: string; answer: string }[];
}

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="py-16 bg-white border-t border-silver-dark">
      <div className="site-container max-w-3xl">
        <h2 className="text-xl font-semibold text-navy mb-8">{title}</h2>
        <div className="space-y-6">
          {items.map((item) => (
            <details key={item.question} className="group border border-silver-dark p-5">
              <summary className="text-sm font-semibold text-navy cursor-pointer list-none flex justify-between items-center">
                {item.question}
                <span className="text-steel group-open:rotate-45 transition-transform text-lg">+</span>
              </summary>
              <p className="mt-4 text-sm text-steel leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
