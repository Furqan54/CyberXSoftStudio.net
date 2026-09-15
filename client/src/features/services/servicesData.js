export const services = [
  {
    id: 1,
    slug: "brand-strategy-digital-growth",
    number: "01",
    icon: "palette",
    name: "Brand Strategy & Digital Growth",
    homeTitle: "Brand Strategy & Digital Growth",
    homeDescription:
      "Elevate your brand with data-driven strategy, SEO, digital marketing, and growth solutions that drive measurable results.",
  },
  {
    id: 2,
    slug: "creative-media-design-animation",
    number: "02",
    icon: "star",
    name: "Creative Media, Design & Animation",
    homeTitle: "Creative Media, Design & Animation",
    homeDescription:
      "World-class visual design, motion graphics, UI/UX, and multimedia production that captivates and converts.",
  },
  {
    id: 3,
    slug: "ai-software-digital-solutions",
    number: "03",
    icon: "code",
    name: "AI, Software & Digital Solutions",
    homeTitle: "AI, Software & Digital Solutions",
    homeDescription:
      "Custom software, AI/ML solutions, enterprise applications, and digital transformation platforms built to scale.",
  },
  {
    id: 4,
    slug: "data-cybersecurity-digital-governance",
    number: "04",
    icon: "shield",
    name: "Data, Cybersecurity & Digital Governance",
    homeTitle: "Data, Cybersecurity & Digital Governance",
    homeDescription:
      "Enterprise security frameworks, data management, compliance, and governance to protect and empower your business.",
  },
  {
    id: 5,
    slug: "talent-augmentation-delivery-support",
    number: "05",
    icon: "users",
    name: "Talent Augmentation & Delivery Support",
    homeTitle: "Talent Augmentation & Delivery Support",
    homeDescription:
      "On-demand expert talent, dedicated teams, and delivery support that integrates seamlessly with your operations.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);