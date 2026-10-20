import type { Metadata } from "next";
import { NextPageLink } from "@/components/next-page-link";
import { PageHeader } from "@/components/page-banner";
import { SkillGroups } from "@/components/pages/skill-groups";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, databases and tooling I work with.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader href="/skills" />
      <SkillGroups />
      <NextPageLink current="/skills" />
    </>
  );
}
