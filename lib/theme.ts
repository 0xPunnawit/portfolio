export type Mode = "paper" | "ink";

export const MODE_STORAGE_KEY = "portfolio-mode";

/** Keeps `class="dark"` and the native form-control theme in sync. */
export function applyMode(mode: Mode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "ink");
  root.style.colorScheme = mode === "ink" ? "dark" : "light";
}

/**
 * Runs before paint so the page never flashes the wrong paper. Kept as a
 * string because it has to be inlined in <head> ahead of hydration.
 */
export const modeBootstrapScript = `(function(){try{var k=${JSON.stringify(
  MODE_STORAGE_KEY,
)};var s=localStorage.getItem(k);var d=s?s==="ink":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
