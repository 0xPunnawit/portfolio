"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navIcons } from "@/components/nav-icon";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

/**
 * Page switcher. Rendered directly under <body> so `sticky` can pin it to the
 * top of the viewport for the whole page, on every page.
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Pages"
      className="no-print sticky top-0 z-40 w-full border-b border-border bg-background"
    >
      <div className="mx-auto flex w-full max-w-5xl items-stretch gap-2 px-5 py-2.5 sm:px-8">
        {navItems.map((item) => {
          const Icon = navIcons[item.href];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              title={item.blurb}
              className={cn(
                "kicker flex flex-1 items-center justify-center gap-2.5 rounded-lg border px-2 py-2.5 transition-colors duration-150",
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:bg-muted/50 hover:text-foreground",
              )}
            >
              <Icon aria-hidden="true" className="size-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
