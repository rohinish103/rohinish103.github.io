"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/client-store";

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("ea-theme", next);
    } catch {
      // Private browsing modes can block storage; the toggle still works per-session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`grid size-9 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary ${className ?? ""}`}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

/** Applies the stored theme before paint so dark mode never flashes white. */
export const themeScript = `(function(){try{var t=localStorage.getItem("ea-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;
