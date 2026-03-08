"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Hydration 에러 방지
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-zinc-600 dark:text-zinc-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-blue-500" />
      <Moon className="absolute h-5 w-5 text-zinc-600 dark:text-zinc-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-blue-500" />
    </button>
  );
}
