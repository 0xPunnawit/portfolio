import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { IconComponent } from "@/components/nav-icon";
import { cn } from "@/lib/utils";

/**
 * Where a link goes decides its colour: code links are indigo, video links
 * are red. Colour plus the arrow is what makes "this is clickable" obvious.
 */
const ACCENTS = {
  code: "border-accent-code/35 bg-accent-code/10 text-accent-code hover:border-accent-code/60 hover:bg-accent-code/20",
  video:
    "border-accent-video/35 bg-accent-video/10 text-accent-video hover:border-accent-video/60 hover:bg-accent-video/20",
} as const;

export function LinkButton({
  href,
  icon: Icon,
  accent,
  children,
}: {
  href: string;
  icon: IconComponent;
  accent: keyof typeof ACCENTS;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "kicker inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-all duration-150 hover:-translate-y-px active:translate-y-0",
        ACCENTS[accent],
      )}
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 opacity-70" />
    </a>
  );
}

/** Tag pills for tech stacks and skill groups. */
export function TechPills({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border px-3.5 py-2 font-mono text-[0.875rem] leading-none text-foreground/85"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** The plain dotted list used for project bullet points. */
export function BulletList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <span
            aria-hidden="true"
            className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-foreground/40"
          />
          <span className="reading text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}
