import { NextPageLink } from "@/components/next-page-link";
import { AboutIntro } from "@/components/pages/about-intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <AboutIntro />

      <NextPageLink current="/" />
    </>
  );
}
