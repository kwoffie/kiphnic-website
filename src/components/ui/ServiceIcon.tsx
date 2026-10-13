import type { ReactNode } from "react";

/**
 * Clean line-art service glyphs (stroke = currentColor, so they inherit the
 * accent color from `.icon`). Keyed by service id. Mobile → phone,
 * Game → monitor, Digital → globe (as requested); the rest get matching icons.
 */
const PATHS: Record<string, ReactNode> = {
  // AI — twin sparkle
  ai: (
    <>
      <path d="M12 3l1.9 4.8L18.7 9.7l-4.8 1.9L12 16.4l-1.9-4.8L5.3 9.7l4.8-1.9z" />
      <path d="M18.6 15.4l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z" />
    </>
  ),
  // Software — code brackets
  software: (
    <>
      <path d="M9 8l-4 4 4 4" />
      <path d="M15 8l4 4-4 4" />
      <path d="M13.2 6l-2.4 12" />
    </>
  ),
  // Web — browser window
  web: (
    <>
      <rect x="2.6" y="4" width="18.8" height="16" rx="2.6" />
      <path d="M2.6 8.6h18.8" />
      <path d="M6 6.3h.01" />
      <path d="M8.6 6.3h.01" />
    </>
  ),
  // Mobile — phone
  mobile: (
    <>
      <rect x="7" y="2.4" width="10" height="19.2" rx="2.6" />
      <path d="M10.6 5.2h2.8" />
      <path d="M10.6 18.6h2.8" />
    </>
  ),
  // Game — desktop monitor
  game: (
    <>
      <rect x="2.6" y="4" width="18.8" height="13" rx="2.4" />
      <path d="M8.6 20.8h6.8" />
      <path d="M12 17v3.8" />
    </>
  ),
  // Digital solutions — globe
  digital: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.6 5.6 3.6 9s-1.1 6.4-3.6 9c-2.5-2.6-3.6-5.6-3.6-9s1.1-6.4 3.6-9z" />
    </>
  ),
};

export default function ServiceIcon({ id }: { id?: string }) {
  const d = (id && PATHS[id]) || PATHS.software;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d}
    </svg>
  );
}
