/**
 * Placeholder content for the Lumora home page. Passed into section
 * components via props — never imported directly inside a component.
 * See obsidian/frontend/component-conventions.md "Data rules".
 */

export const ASSET_BASE_URL =
  "https://api.getlayers.ai/storage/v1/object/public/public/assets/lumora-e8b711fc68";

export const HERO_IMAGES = {
  // The file named after.jpg is the always-visible base layer; before.jpg is
  // revealed under the cursor trail. Do not swap — see LiquidReveal.
  beforeSrc: `${ASSET_BASE_URL}/hero/after.jpg`,
  afterSrc: `${ASSET_BASE_URL}/hero/before.jpg`,
};

export interface NavItem {
  label: string;
  id: string;
  isContact?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Work", id: "works" },
  { label: "Services", id: "services" },
  { label: "Studio", id: "about" },
  { label: "Careers", id: "careers" },
  { label: "Contact", id: "contact", isContact: true },
];

export interface HeroCardItem {
  caption: string;
  title: string;
}

export const HERO_CARD_ITEMS: HeroCardItem[] = [
  { caption: "Conversion design", title: "Crafted to convert." },
  { caption: "Engineering", title: "Built to scale." },
  { caption: "Brand systems", title: "Designed to last." },
];

export const PARTNERS = [
  "Kaido",
  "Northpeak",
  "Vellum",
  "Orbit",
  "Brightline",
  "Cobalt",
  "Mesa",
];

export interface PortfolioItem {
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: "Aster Labs",
    category: "Branding",
    year: "2025",
    description:
      "A complete identity and go-to-market system for a fast-moving research startup.",
    tags: ["Branding", "Strategy", "Design"],
  },
  {
    name: "Nova Finance",
    category: "Product",
    year: "2024",
    description:
      "A finance platform reimagined — clear data, calm interfaces, and effortless flows.",
    tags: ["Product Design", "Web App", "QA"],
  },
  {
    name: "Helio Studio",
    category: "Identity",
    year: "2023",
    description:
      "A bold visual identity and art direction system built to scale across every surface.",
    tags: ["Brand Identity", "Art Direction"],
  },
  {
    name: "Pulse Health",
    category: "Mobile",
    year: "2023",
    description:
      "A wellness app grounded in research, shipped end to end from concept to release.",
    tags: ["Mobile App", "UX Research", "Development"],
  },
];

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    title: "Software Development",
    description: "Scalable web & mobile products built to last.",
  },
  {
    index: "02",
    title: "Product Design",
    description: "Interfaces that feel effortless and look sharp.",
  },
  {
    index: "03",
    title: "Quality Assurance",
    description: "Rigorous testing for flawless, confident releases.",
  },
  {
    index: "04",
    title: "Consulting",
    description: "Strategy and direction for ambitious teams.",
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 12, suffix: "", label: "Years of craft" },
  { value: 40, suffix: "+", label: "Team members" },
];

export interface FooterLink {
  label: string;
  id: string;
}

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About", id: "about" },
  { label: "Careers", id: "careers" },
  { label: "Partners", id: "partners" },
  { label: "Contact", id: "contact" },
];

export const FOOTER_SERVICES_LINKS: FooterLink[] = [
  { label: "Development", id: "development" },
  { label: "Design", id: "design" },
  { label: "Quality Assurance", id: "qa" },
  { label: "Consulting", id: "consulting" },
];

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { label: "X / Twitter", id: "twitter" },
  { label: "Behance", id: "behance" },
  { label: "Dribbble", id: "dribbble" },
  { label: "LinkedIn", id: "linkedin" },
];
