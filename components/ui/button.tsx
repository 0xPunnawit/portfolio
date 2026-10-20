import { cva } from "class-variance-authority";

/**
 * Styling for the calls-to-action. Colours come from the shadcn token set in
 * `app/globals.css`; only the variants the site actually uses are kept.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      },
      size: {
        lg: "h-9 gap-1.5 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

export { buttonVariants };
