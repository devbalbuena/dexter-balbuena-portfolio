"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200/80 bg-white/60 text-stone-500 dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-400">
        <span className="h-4 w-4" />
      </div>
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <motion.button
      id="theme-toggle-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.15 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200/90 bg-white/80 text-stone-700 shadow-2xs backdrop-blur-xs transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-100 cursor-pointer"
      type="button"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-stone-600" />
      )}
    </motion.button>
  );
}
