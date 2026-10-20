import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { IconComponent } from "@/components/nav-icon";
import { cn } from "@/lib/utils";

/**
 * Bordered action link. YouTube demos use the same shape with the play mark,
 * so "this opens a video" is readable at a glance.
 */
export function LinkButton({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: IconComponent;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="kicker inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 text-foreground transition-colors duration-150 hover:border-foreground/40 hover:bg-muted/60"
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 shrink-0 text-muted-foreground"
      />
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
