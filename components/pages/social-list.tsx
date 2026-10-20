import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GitHubMark, LinkedInMark, FacebookMark } from "@/components/icons";
import type { IconComponent } from "@/components/nav-icon";
import { contacts, profile } from "@/lib/portfolio";
import { prettifyUrl } from "@/lib/nav";

type SocialRow = {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
  external: boolean;
  download?: boolean;
};

const rows: SocialRow[] = [
  {
    label: "Email",
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: prettifyUrl(contacts.github),
    href: contacts.github,
    icon: GitHubMark,
    external: true,
  },
  {
    label: "LinkedIn",
    value: prettifyUrl(contacts.linkedin),
    href: contacts.linkedin,
    icon: LinkedInMark,
    external: true,
  },
  {
    label: "Facebook",
    value: prettifyUrl(contacts.facebook),
    href: contacts.facebook,
    icon: FacebookMark,
    external: true,
  },
  {
    label: "Resume",
    value: "PDF download",
    href: profile.resumeUrl,
    icon: Download,
    external: false,
    download: true,
  },
];

/** One tall row per profile: round mark, big label, small URL. */
export function SocialList() {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {rows.map((row) => {
        const Icon = row.icon;
        return (
          <li key={row.label}>
            <a
              href={row.href}
              {...(row.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              {...(row.download ? { download: true } : {})}
              className="group flex items-center gap-4 py-5 sm:gap-6 sm:py-6"
            >
              <span
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-full border border-border bg-muted/40 transition-colors duration-150 group-hover:border-foreground/40"
              >
                <Icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-[clamp(1.375rem,3.2vw,1.6rem)] leading-tight tracking-[-0.01em]">
                  {row.label}
                </span>
                <span className="mt-1 block truncate font-mono text-[0.8125rem] text-muted-foreground">
                  {row.value}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
