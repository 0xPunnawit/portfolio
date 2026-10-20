import type { Metadata } from "next";
import { NextPageLink } from "@/components/next-page-link";
import { PageHeader } from "@/components/page-banner";
import { SocialList } from "@/components/pages/social-list";
import { contacts } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, GitHub, LinkedIn, Facebook and the PDF resume.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader href="/contact" note="Reply by email" />

      <p className="kicker text-muted-foreground">Write to me</p>
      <a
        href={`mailto:${contacts.email}`}
        className="mt-4 block font-serif text-[clamp(1.5rem,5vw,2.75rem)] leading-tight tracking-[-0.02em] break-words underline decoration-border decoration-1 underline-offset-[10px] transition-colors hover:decoration-foreground"
      >
        {contacts.email}
      </a>

      <div className="mt-14">
        <SocialList />
      </div>

      <NextPageLink current="/contact" />
    </>
  );
}
