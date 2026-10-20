import type { Metadata } from "next";
import { NextPageLink } from "@/components/next-page-link";
import { PageHeader } from "@/components/page-banner";
import { ProjectList } from "@/components/pages/project-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects with source code on GitHub and video demos on YouTube.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader href="/projects" />
      <ProjectList />
      <NextPageLink current="/projects" />
    </>
  );
}
