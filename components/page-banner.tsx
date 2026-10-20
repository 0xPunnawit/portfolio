import { getNavItem } from "@/lib/nav";

/** Top of a page: the title plaque plus a one-line summary. */
export function PageHeader({ href, note }: { href: string; note?: string }) {
  const item = getNavItem(href);

  return (
    <header className="mb-12 sm:mb-16">
      <div className="sticker flex flex-wrap items-center justify-between gap-x-5 gap-y-1 rounded-xl border border-foreground/15 bg-muted/40 px-5 py-4 sm:px-6 sm:py-5">
        <h1 className="font-serif text-[clamp(1.65rem,4.2vw,2.6rem)] leading-[1.1] tracking-[-0.02em] text-balance">
          {item?.label ?? ""}
        </h1>
        {note ? (
          <span className="kicker text-muted-foreground">{note}</span>
        ) : null}
      </div>

      {item?.blurb ? (
        <p className="reading-lead measure mt-6 text-muted-foreground">{item.blurb}</p>
      ) : null}
    </header>
  );
}
