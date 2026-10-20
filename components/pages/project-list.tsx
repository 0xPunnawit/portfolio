import { GitHubMark, YouTubeMark } from "@/components/icons";
import { LinkButton, TechPills } from "@/components/link-button";
import { personalProjects } from "@/lib/portfolio";

export function ProjectList() {
  return (
    <ul className="space-y-6">
      {personalProjects.map((project) => (
        <li key={project.name}>
          <article className="rounded-xl border border-border bg-card px-5 py-6 sm:px-7 sm:py-7">
            <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
              <h2 className="font-serif text-[clamp(1.375rem,3vw,1.65rem)] leading-snug tracking-[-0.02em] text-balance">
                {project.name}
              </h2>
              <span className="kicker text-muted-foreground">{project.year}</span>
            </div>

            <p className="reading measure mt-4 text-muted-foreground">
              {project.description}
            </p>

            <TechPills items={project.techStack} className="mt-6" />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.github ? (
                <LinkButton href={project.github} icon={GitHubMark}>
                  Source code
                </LinkButton>
              ) : null}
              {project.youtube ? (
                <LinkButton href={project.youtube} icon={YouTubeMark}>
                  Video demo on YouTube
                </LinkButton>
              ) : null}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
