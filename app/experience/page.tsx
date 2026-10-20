import type { Metadata } from "next";
import { NextPageLink } from "@/components/next-page-link";
import { PageHeader } from "@/components/page-banner";
import { ExperienceTimeline } from "@/components/pages/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internship experience and the projects shipped during it, with the tech stack for each one.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader href="/experience" />
      <ExperienceTimeline />
      <NextPageLink current="/experience" />
    </>
  );
}
