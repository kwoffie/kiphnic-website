"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const goingTo = !mounted ? "theme" : theme === "light" ? "dark" : "light";
  const label = mounted ? `Switch to ${goingTo} theme` : "Toggle color theme";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{!mounted ? "◐" : theme === "light" ? "☾" : "☀"}</span>
    </button>
  );
}
