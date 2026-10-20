import { TechPills } from "@/components/link-button";
import { skillGroups } from "@/lib/portfolio";

export function SkillGroups() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {skillGroups.map((group) => (
        <section key={group.label} aria-labelledby={`skill-${group.label}`}>
          <div className="flex items-baseline gap-4">
            <h2
              id={`skill-${group.label}`}
              className="font-serif text-[clamp(1.25rem,2.8vw,1.5rem)] tracking-[-0.01em]"
            >
              {group.label}
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
          <TechPills items={group.items} className="mt-5" />
        </section>
      ))}
    </div>
  );
}
