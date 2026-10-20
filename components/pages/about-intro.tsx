import { buttonVariants } from "@/components/ui/button";
import { contacts, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Download, Mail } from "lucide-react";

export function AboutIntro() {
  const [firstName, ...remainder] = profile.name.split(" ");
  const lastName = remainder.join(" ");

  return (
    <section className="pt-2 sm:pt-4">
      <p className="kicker text-muted-foreground">Portfolio · {profile.role}</p>

      <h1 className="mt-4 font-serif text-[clamp(2.5rem,7.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] text-balance">
        {firstName}
        {lastName ? (
          <span className="text-muted-foreground"> {lastName}</span>
        ) : null}
      </h1>

      <p className="reading-lead measure mt-6 text-foreground/90">
        {profile.bio}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resumeUrl}
          download
          className={cn(
            buttonVariants(),
            "h-12 gap-2.5 rounded-full px-5 font-mono text-[0.8125rem] tracking-[0.08em] uppercase",
          )}
        >
          <Download aria-hidden="true" className="size-4" />
          Resume — PDF
        </a>
        <a
          href={`mailto:${contacts.email}`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-12 gap-2.5 rounded-full px-5 font-mono text-[0.8125rem] tracking-[0.08em] uppercase",
          )}
        >
          <Mail aria-hidden="true" className="size-4" />
          Email me
        </a>
      </div>
    </section>
  );
}
