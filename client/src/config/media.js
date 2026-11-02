/*
 * Image map: which supplied artwork belongs to which page or service.
 *
 * Names refer to optimised files in /public/images. Each name has two
 * files: <name>.webp (1920 wide) and <name>-sm.webp (960 wide).
 * The original artwork is kept in the project's /pics folder.
 */

export const pageMedia = {
  home: { name: "home-hero", position: "62% 50%" },
  homeCta: { name: "home-cta", position: "70% 50%" },
  services: { name: "services-hero", position: "62% 50%" },
  work: { name: "work-hero", position: "60% 50%" },
  insights: { name: "insights-hero", position: "62% 50%" },
  about: { name: "about-hero", position: "62% 50%" },
  aboutOverview: { name: "about-overview", position: "55% 50%" },
  contact: { name: "contact-hero", position: "62% 50%" },
};

export const serviceMedia = {
  "brand-strategy-digital-growth": {
    hero: "brand-hero",
    section: "brand-section",
    position: "72% 50%",
  },
  "creative-media-design-animation": {
    hero: "creative-hero",
    section: "creative-section",
    position: "78% 50%",
  },
  "ai-software-digital-solutions": {
    hero: "software-hero",
    section: "software-section",
    position: "70% 50%",
  },
  "data-cybersecurity-digital-governance": {
    hero: "data-hero",
    section: "data-section",
    position: "62% 50%",
  },
  "talent-augmentation-delivery-support": {
    hero: "talent-hero",
    section: "talent-section",
    position: "66% 50%",
  },
};

// Insight cards pick their image by category.
export const insightMedia = {
  "AI & Automation": "software-section",
  "Software & Platforms": "software-hero",
  "Cybersecurity & Governance": "data-section",
  "Data & Business Intelligence": "data-crystal",
  "Brand Growth & Creative": "brand-section",
  "Delivery & Talent": "talent-hero",
};
