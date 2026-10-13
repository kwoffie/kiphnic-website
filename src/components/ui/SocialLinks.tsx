import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { socialIconMap } from "@/components/ui/SocialIcon";

type SocialLinksProps = {
  /** "footer" shows icon + uppercase label; "contact" is icon-only tiles. */
  variant?: "footer" | "contact";
  className?: string;
};

/**
 * Renders the configured social profiles as modern filled icon tiles.
 * Brand color per network is supplied via --brand for the hover glow.
 */
export default function SocialLinks({ variant = "contact", className = "" }: SocialLinksProps) {
  return (
    <div className={`socials-row ${className}`.trim()}>
      {siteConfig.socials.map((s) => {
        const Icon = socialIconMap[s.label];
        if (!Icon) return null;
        const brand = brandColors[s.label] ?? "var(--accent)";
        return (
          <Link
            key={s.label}
            className={`social-tile ${variant === "footer" ? "social-tile--labeled" : ""}`.trim()}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ ["--brand" as string]: brand }}
          >
            <Icon className="social-tile-icon" />
            {variant === "footer" && <span>{s.label.toUpperCase()}</span>}
          </Link>
        );
      })}
    </div>
  );
}

/** Official brand accent per network (used only for hover glow + border). */
const brandColors: Record<string, string> = {
  WhatsApp: "#25D366",
  Facebook: "#1877F2",
  LinkedIn: "#0A66C2",
  GitHub: "#8b949e",
  Instagram: "#E4405F",
  Snapchat: "#FFFC00",
  Discord: "#5865F2",
  Steam: "#1a9fff",
};
