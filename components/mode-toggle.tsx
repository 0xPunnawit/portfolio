"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { applyMode, MODE_STORAGE_KEY, type Mode } from "@/lib/theme";

const OPTIONS: { mode: Mode; label: string; hint: string }[] = [
  { mode: "paper", label: "Paper", hint: "Light reading mode" },
  { mode: "ink", label: "Ink", hint: "Dark reading mode" },
];

/** The <html> class written by the bootstrap script is the source of truth. */
function readMode(): Mode {
  return document.documentElement.classList.contains("dark") ? "ink" : "paper";
}

function getServerMode(): Mode {
  return "paper";
}

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  // Switching mode in another tab should switch it here too. The new value
  // comes from the event, because this tab still shows the old one.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== MODE_STORAGE_KEY) return;
    applyMode(event.newValue === "ink" ? "ink" : "paper");
    listener();
  };

  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/**
 * A two-state switch rather than a sun/moon icon: the site is monochrome, so
 * the control names the stock it is printed on.
 */
export function ModeToggle() {
  const mode = useSyncExternalStore(subscribe, readMode, getServerMode);

  function select(next: Mode) {
    applyMode(next);
    try {
      window.localStorage.setItem(MODE_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, embedded webview) — the
      // switch still works for the rest of this visit.
    }
    listeners.forEach((listener) => listener());
  }

  return (
    <div
      role="group"
      aria-label="Reading mode"
      className="no-print flex items-center rounded-lg border border-border p-[3px]"
    >
      {OPTIONS.map((option) => {
        const isActive = mode === option.mode;
        return (
          <button
            key={option.mode}
            type="button"
            title={option.hint}
            aria-pressed={isActive}
            onClick={() => select(option.mode)}
            className={cn(
              "kicker cursor-pointer rounded-md px-2.5 py-1.5 transition-colors duration-150",
              isActive
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
