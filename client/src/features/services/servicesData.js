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

    showcaseTitle: "Build Brands That Command Attention",

    showcaseDescription:
      "We partner with enterprise marketing and growth leaders to craft brand strategies grounded in competitive intelligence. From SEO and performance marketing to full-funnel automation, every tactic is built around measurable pipeline impact and lasting brand equity.",

    features: [
      "Data-first brand positioning & messaging frameworks",
      "SEO, content marketing & authority building",
      "Performance marketing across paid search & social",
      "Executive-ready ROI dashboards & reporting",
    ],
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

    showcaseTitle: "World-Class Creative That Converts",

    showcaseDescription:
      "Our creative studio delivers UI/UX design, motion graphics, video production, and immersive digital experiences that elevate brand perception and drive engagement. Every output is crafted to the standard of the world's leading agencies — built at enterprise speed.",

    features: [
      "UI/UX design & interactive prototyping",
      "Motion graphics, 2D/3D animation & video",
      "Brand identity, print & digital design systems",
      "Immersive web experiences & WebGL",
    ],
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

    showcaseTitle: "Custom Technology Built to Scale",

    showcaseDescription:
      "From cloud-native applications and enterprise platforms to AI/ML solutions and full-cycle digital transformation, our engineering teams deliver software that solves real business problems — on time, on budget, and built to last.",

    features: [
      "Custom software & enterprise application development",
      "AI, machine learning & intelligent automation",
      "Cloud architecture, DevOps & platform engineering",
      "ERP, CRM & third-party system integration",
    ],
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

    showcaseTitle: "Protect, Govern & Unlock Your Data",

    showcaseDescription:
      "Enterprise security architecture, data management, compliance frameworks, and digital governance — designed to meet the most demanding regulatory environments. We help organizations achieve resilience without slowing down transformation.",

    features: [
      "Security architecture, SOC & threat intelligence",
      "ISO 27001, NCA & regulatory compliance",
      "Data strategy, governance & analytics platforms",
      "Zero Trust, SIEM, and incident response",
    ],
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

    showcaseTitle: "Expert Talent, On Demand",

    showcaseDescription:
      "Access a pre-vetted pool of 500+ specialists across software engineering, data, cybersecurity, design, and delivery. Our talent integrates with your culture, your tools, and your processes — delivering results from day one with an average time-to-placement of 5 business days.",

    features: [
      "Staff augmentation & dedicated project teams",
      "Managed services with SLA-backed delivery",
      "CxO-as-a-Service: fractional CTO, CISO, CMO",
      "30-day replacement guarantee on all placements",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const serviceCapabilities = [
  {
    id: 1,
    title: "Integrated Delivery",
    description:
      "Cross-functional teams working from a shared context — no handoff gaps, no finger-pointing.",
  },
  {
    id: 2,
    title: "Senior-Led Engagements",
    description:
      "Every project is led by a principal consultant with 10+ years of enterprise delivery experience.",
  },
  {
    id: 3,
    title: "Technology-Agnostic",
    description:
      "We choose the right tool for your problem, not the technology we happen to sell.",
  },
  {
    id: 4,
    title: "Outcome-Based SLAs",
    description:
      "Contractual commitments tied to business outcomes, not just activities or deliverables.",
  },
  {
    id: 5,
    title: "Transparent Reporting",
    description:
      "Weekly delivery reports and monthly executive dashboards — full visibility at every level.",
  },
  {
    id: 6,
    title: "Global Delivery, Local Presence",
    description:
      "Delivery centers across MENA, Europe, and South Asia with on-site leadership in your market.",
  },
];