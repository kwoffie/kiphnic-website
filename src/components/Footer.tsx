import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div className="foot-brand">
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.tagline}</span>
        </div>
        <div className="foot-links">
          {siteConfig.nav.map((n) => (
            <Link key={n.href + n.label} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div className="foot-socials">
          <span className="foot-social-title">FOLLOW US</span>
          <div className="foot-social">
            <SocialLinks variant="footer" />
          </div>
        </div>
        <span className="foot-line">{siteConfig.footerLine}</span>
        <span>© 2026 Kiphnic. All rights reserved.</span>
      </div>
    </footer>
  );
}

