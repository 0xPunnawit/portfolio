import Link from "next/link";
import { profile } from "@/lib/portfolio";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="no-print border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${profile.name} — home`}
        >
          <span
            aria-hidden="true"
            className="grid size-11 place-items-center rounded-lg border border-foreground/25 bg-muted/50 font-mono text-[0.8125rem] font-medium tracking-[0.06em] uppercase"
          >
            {initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[1.0625rem] font-medium">{profile.name}</span>
            <span className="kicker mt-0.5 text-muted-foreground">
              {profile.role}
            </span>
          </span>
        </Link>

        <ModeToggle />
      </div>
    </header>
  );
}
