export const socials = [
  { label: "WhatsApp", href: "https://wa.me/233538616119" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61595099471852" },
  { label: "Snapchat", href: "https://www.snapchat.com/add/kiphnic?share_id=SSHxCJQ65Gk&locale=en-US" },
  { label: "Instagram", href: "https://www.instagram.com/kiphnic7/" },
  { label: "GitHub", href: "https://github.com/kwoffie" },
  { label: "Discord", href: "https://discord.com/users/1399146183674302606" },
  { label: "Steam", href: "https://steamcommunity.com/profiles/76561199767153409/" },
] as const;

export type Social = (typeof socials)[number];

export const siteConfig = {
  name: "KIPHNIC",
  // Current canonical origin. Overridable via NEXT_PUBLIC_SITE_URL when a custom domain arrives.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiphnic-website.vercel.app",
  tagline: "INTELLIGENCE. ELEVATED.",
  description:
    "Kiphnic is an AI-first technology company building intelligent digital experiences, software and products.",
  phones: ["0200823079", "0538616119"],
  email: "kiphnic7@gmail.com",
  whatsapp: "0538616119",
  whatsappUrl: "https://wa.me/233538616119",
  founder: "Mr. Joseph",
  founderRole: "Founder / Developer",
  nav: [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "AI", href: "/ai" },
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ],
  heroTags: ["AI", "SOFTWARE", "WEB", "MOBILE", "GAMES", "DIGITAL SYSTEMS"],
  socials,
  footerLine: "Build the future. Together.",
} as const;

export type SiteConfig = typeof siteConfig;

export type SocialLabel = (typeof socials)[number]["label"];
