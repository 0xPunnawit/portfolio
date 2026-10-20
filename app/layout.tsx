import { SiteHeader } from "@/components/site-header";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/portfolio";
import { modeBootstrapScript } from "@/lib/theme";
import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans_Thai,
  IBM_Plex_Serif,
} from "next/font/google";
import "./globals.css";

// Body copy: drawn for Thai + Latin side by side, so both scripts share
// the same rhythm.
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-thai",
  display: "swap",
});

// Headings: a serif for contrast against the technical body and mono labels.
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-plex-serif",
  display: "swap",
});

// Metadata, dates and tech names — the engineer's voice.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    "backend engineer",
    "Spring Boot",
    "Go",
    "Node.js",
    "portfolio",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexThai.variable} ${plexSerif.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeBootstrapScript }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="kicker sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <SiteNav />
        <main
          id="main"
          className="mx-auto w-full max-w-5xl px-5 pt-10 pb-4 sm:px-8 sm:pt-14"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
