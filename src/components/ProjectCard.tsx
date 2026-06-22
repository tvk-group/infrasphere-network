interface ProjectCardProps {
  title: string;
  description: string;
  stage: string;
  category: string;
}

export function ProjectCard({ title, description, stage, category }: ProjectCardProps) {
  return (
    <div className="p-8 bg-white border border-silver-dark">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="text-xs font-medium uppercase tracking-wider text-steel bg-silver px-2.5 py-1">{category}</span>
        <span className="text-xs font-medium text-accent-green bg-accent-green-light px-2.5 py-1">{stage}</span>
      </div>
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <p className="text-sm text-steel leading-relaxed">{description}</p>
    </div>
  );
}
