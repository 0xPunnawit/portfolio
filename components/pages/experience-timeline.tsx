import { BulletList, LinkButton, TechPills } from "@/components/link-button";
import { YouTubeMark } from "@/components/icons";
import { experiences, formatRange } from "@/lib/portfolio";

/**
 * One block per role, with a dot on the timeline and the projects shipped
 * during that role as cards underneath.
 */
export function ExperienceTimeline() {
  return (
    <div className="space-y-14 sm:space-y-16">
      {experiences.map((experience) => (
        <article
          key={`${experience.company}-${experience.startDate}`}
          className="relative border-l border-border pl-6 sm:pl-10"
        >
          <span
            aria-hidden="true"
            className="absolute top-3.5 -left-[7px] size-3 rounded-full border border-background bg-foreground"
          />

          <header>
            <h2 className="font-serif text-[clamp(1.5rem,3.4vw,1.9rem)] leading-tight tracking-[-0.02em] text-balance">
              {experience.role}
            </h2>
            <p className="mt-2 text-[1.125rem] font-medium">{experience.company}</p>
            <p className="kicker mt-3 text-muted-foreground">
              {formatRange(experience.startDate, experience.endDate)}
              <span className="mx-2 opacity-50">·</span>
              {experience.durationText}
            </p>
          </header>

          <div className="mt-7 space-y-6">
            {experience.projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-border bg-card px-5 py-6 sm:px-7 sm:py-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
                  <h3 className="font-serif text-[1.375rem] leading-snug tracking-[-0.01em] text-balance">
                    {project.title}
                  </h3>
                  <span className="kicker shrink-0 rounded-full border border-border px-3 py-1.5 text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                <BulletList items={project.details} className="mt-5" />
                <TechPills items={project.techStack} className="mt-6" />

                {project.youtube ? (
                  <div className="mt-6">
                    <LinkButton href={project.youtube} icon={YouTubeMark}>
                      Video demo on YouTube
                    </LinkButton>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
