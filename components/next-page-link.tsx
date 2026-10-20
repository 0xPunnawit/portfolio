import { getNextNavItem } from "@/lib/nav";

/** Hands the reader on to the next page instead of leaving them at the end. */
export function NextPageLink({ current }: { current: string }) {
  const next = getNextNavItem(current);
  if (!next) return null;

  return <div className="mt-16 border-t border-border pt-8 sm:mt-20"></div>;
}
