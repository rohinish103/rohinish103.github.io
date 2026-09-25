"use client";

import { useSyncExternalStore } from "react";

const isBrowser = typeof window !== "undefined";

function createStore<T>(
  read: () => T,
  listen: (notify: () => void) => () => void,
  serverValue: T,
) {
  let snapshot = isBrowser ? read() : serverValue;
  const listeners = new Set<() => void>();
  let unlisten: (() => void) | null = null;

  const notify = () => {
    const next = read();
    if (next === snapshot) return;
    snapshot = next;
    listeners.forEach((listener) => listener());
  };

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      if (!unlisten) unlisten = listen(notify);
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0 && unlisten) {
          unlisten();
          unlisten = null;
        }
      };
    },
    // Snapshots are cached so React never sees a changing value mid-render.
    getSnapshot: () => snapshot,
    getServerSnapshot: () => serverValue,
    refresh: notify,
  };
}

const clock = createStore(
  () => Math.floor(Date.now() / 1000),
  (notify) => {
    const id = setInterval(notify, 1000);
    return () => clearInterval(id);
  },
  0,
);

/** Seconds since epoch, refreshed once per second on the client only. */
export function useClockSeconds() {
  return useSyncExternalStore(
    clock.subscribe,
    clock.getSnapshot,
    clock.getServerSnapshot,
  );
}

const scroll = createStore(
  () => window.scrollY > 8,
  (notify) => {
    window.addEventListener("scroll", notify, { passive: true });
    return () => window.removeEventListener("scroll", notify);
  },
  false,
);

/** True once the page has scrolled past the header shadow threshold. */
export function useScrolled() {
  return useSyncExternalStore(
    scroll.subscribe,
    scroll.getSnapshot,
    scroll.getServerSnapshot,
  );
}

const theme = createStore(
  () => (document.documentElement.classList.contains("dark") ? "dark" : "light"),
  (notify) => {
    const observer = new MutationObserver(notify);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  },
  "light" as "light" | "dark",
);

/** Current theme, kept in sync with the `dark` class on <html>. */
export function useTheme() {
  return useSyncExternalStore(
    theme.subscribe,
    theme.getSnapshot,
    theme.getServerSnapshot,
  );
}
