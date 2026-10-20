import type { ComponentType, SVGProps } from "react";
import { Briefcase, FolderGit2, IdCard, Layers, Mail } from "lucide-react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** One icon per page, reused by the nav, the home-page cards and the footer. */
export const navIcons: Record<string, IconComponent> = {
  "/": IdCard,
  "/experience": Briefcase,
  "/projects": FolderGit2,
  "/skills": Layers,
  "/contact": Mail,
};
