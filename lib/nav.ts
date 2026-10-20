type NavItem = {
  href: string;
  label: string;
  /** Shown under the page title and in the "next page" link. */
  blurb: string;
};

/**
 * One page per subject. The order is the reading order, so the end of every
 * page can point at the next one.
 */
export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Portfolio",
    blurb: "Who I am and what I build",
  },
  {
    href: "/experience",
    label: "Experience",
    blurb: "Where I have worked and what I shipped there",
  },
  {
    href: "/projects",
    label: "Projects",
    blurb: "Side projects, source code and video demos",
  },
  {
    href: "/skills",
    label: "Skills",
    blurb: "Languages, frameworks, databases and tooling",
  },
  {
    href: "/contact",
    label: "Contact",
    blurb: "Email and social profiles",
  },
];

export function getNavItem(href: string) {
  return navItems.find((item) => item.href === href);
}

export function getNextNavItem(href: string) {
  const index = navItems.findIndex((item) => item.href === href);
  if (index === -1) return undefined;
  return navItems[(index + 1) % navItems.length];
}

/** A URL's host and path without the scheme, e.g. `github.com/0xPunnawit`. */
export function prettifyUrl(url: string) {
  try {
    const { hostname, pathname } = new URL(url);
    return `${hostname.replace(/^www\./, "")}${pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
}
