import {
  BrainCircuit,
  Brush,
  ChartNoAxesCombined,
  DatabaseZap,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

/* =========================================================
   Services
========================================================= */

export const services = [
  {
    id: 1,

    slug: "brand-strategy-digital-growth",

    number: "01",

    icon: ChartNoAxesCombined,

    name: "Brand Strategy & Digital Growth",

    homeTitle: "Brand Strategy & Digital Growth",

    homeDescription:
      "Build stronger brands, acquire the right audiences, and turn digital activity into measurable business growth.",

    showcaseTitle:
      "Build a Brand That Creates Measurable Business Growth",

    showcaseDescription:
      "We combine brand strategy, market intelligence, performance marketing, campaign planning, and growth analytics to help enterprises strengthen positioning and generate sustainable demand.",

    features: [
      "Brand Strategy & Positioning",
      "Digital Growth Strategy",
      "Performance Marketing",
      "Content & Campaign Strategy",
    ],

    detail: {
      heroTitle:
        "Brand Strategy That Drives Enterprise Growth",

      heroDescription:
        "Build a brand that is clear, differentiated, and engineered for growth. We combine market intelligence, positioning, digital strategy, and performance marketing to turn brand strategy into measurable business outcomes.",

      overviewTitle:
        "Build a Brand Designed to Win",

      overviewDescription:
        "Strong brands are not built through visuals alone. They are built through a clear understanding of the market, the customer, the competitive landscape, and the commercial goals behind every decision.",

      overviewSecondaryDescription:
        "CyberX Soft brings brand strategy, digital growth, campaign planning, and performance optimization together under one integrated approach — helping enterprises strengthen market positioning while creating predictable demand.",

      overviewPoints: [
        "Research-led brand positioning aligned with commercial objectives.",
        "Integrated digital strategies built around measurable growth goals.",
        "Consistent messaging across customer touchpoints and channels.",
        "Continuous performance optimization backed by actionable data.",
      ],

      coreServices: [
        {
          id: 1,

          title: "Brand Strategy & Positioning",

          description:
            "Define your market position, audience, value proposition, messaging architecture, and competitive differentiation through structured research and strategic planning.",
        },
        {
          id: 2,

          title: "Digital Growth Strategy",

          description:
            "Create an integrated digital roadmap covering acquisition, conversion, retention, channel priorities, campaign planning, and measurable performance targets.",
        },
        {
          id: 3,

          title: "Performance Marketing",

          description:
            "Plan, launch, and optimize results-driven campaigns across paid digital channels with a focus on qualified demand, conversion efficiency, and return on investment.",
        },
        {
          id: 4,

          title: "Content & Campaign Strategy",

          description:
            "Develop campaign concepts, messaging frameworks, editorial direction, and channel-specific content plans that move audiences from awareness to action.",
        },
      ],

      capabilities: [
        {
          id: 1,

          title: "Market & Competitor Research",

          description:
            "Understand category dynamics, competitive positioning, audience expectations, and market opportunities before defining strategic direction.",
        },
        {
          id: 2,

          title: "Brand Architecture & Messaging",

          description:
            "Create a structured brand system covering positioning, value propositions, messaging hierarchy, tone of voice, and portfolio alignment.",
        },
        {
          id: 3,

          title: "Campaign Planning & Optimization",

          description:
            "Translate strategy into coordinated campaigns with clear objectives, channel roles, measurement frameworks, and ongoing optimization.",
        },
        {
          id: 4,

          title: "Growth Analytics & Reporting",

          description:
            "Track the metrics that matter through transparent reporting, performance analysis, and actionable recommendations for continuous growth.",
        },
      ],
    },
  },

  /* =======================================================
     Creative Media, Design & Animation
  ======================================================= */

  {
    id: 2,

    slug: "creative-media-design-animation",

    number: "02",

    icon: Brush,

    name: "Creative Media, Design & Animation",

    homeTitle: "Creative Media, Design & Animation",

    homeDescription:
      "Transform ideas into compelling brand experiences through strategic design, motion, animation, video, and digital creative production.",

    showcaseTitle:
      "Creative Experiences That Make Brands Impossible to Ignore",

    showcaseDescription:
      "From brand identity and campaign design to animation, video production, and digital content, our creative team combines storytelling and design craft with business strategy.",

    features: [
      "Brand & Visual Identity",
      "Creative Campaign Design",
      "Motion Graphics & Animation",
      "Video & Digital Content",
    ],

    detail: {
      heroTitle:
        "Creative Media That Turns Ideas Into Impact",

      heroDescription:
        "Create memorable visual experiences that strengthen your brand and connect with the people who matter. Our designers, animators, and creative specialists turn strategy into high-impact digital content.",

      overviewTitle:
        "Creative Built Around Business Objectives",

      overviewDescription:
        "Great creative work must do more than look good. It must communicate clearly, reinforce brand positioning, engage audiences, and support measurable business objectives.",

      overviewSecondaryDescription:
        "CyberX Soft combines strategic thinking, visual design, animation, video, and digital production to build creative systems that remain consistent across campaigns, platforms, and customer touchpoints.",

      overviewPoints: [
        "Strategic creative concepts aligned with brand and campaign objectives.",
        "Consistent visual systems designed for multi-channel execution.",
        "Scalable design and production workflows for ongoing content needs.",
        "Animation and video experiences optimized for digital audiences.",
      ],

      coreServices: [
        {
          id: 1,

          title: "Brand & Visual Identity",

          description:
            "Develop distinctive visual identities, brand systems, design languages, and practical guidelines that create consistency across every customer touchpoint.",
        },
        {
          id: 2,

          title: "Campaign Creative & Design",

          description:
            "Create integrated campaign assets for digital, social, advertising, presentations, events, and enterprise communications while maintaining brand consistency.",
        },
        {
          id: 3,

          title: "Motion Graphics & Animation",

          description:
            "Produce engaging 2D, 3D, motion graphics, explainer animations, product visuals, and animated storytelling designed for modern digital channels.",
        },
        {
          id: 4,

          title: "Video & Content Production",

          description:
            "Plan and produce branded video, social content, corporate storytelling, promotional material, and platform-specific creative content.",
        },
      ],

      capabilities: [
        {
          id: 1,

          title: "Creative Direction",

          description:
            "Establish the creative concept, visual language, tone, and execution standards needed to keep campaigns strategically aligned.",
        },
        {
          id: 2,

          title: "UI & Digital Experience Design",

          description:
            "Design modern interfaces, digital experiences, marketing pages, dashboards, and interactive touchpoints built around user needs.",
        },
        {
          id: 3,

          title: "Animation & Motion Design",

          description:
            "Bring ideas to life through polished animation, motion systems, explainers, visual effects, and dynamic branded content.",
        },
        {
          id: 4,

          title: "Scalable Creative Production",

          description:
            "Support high-volume creative requirements through repeatable design systems, templates, workflows, and dedicated production support.",
        },
      ],
    },
  },

  /* =======================================================
     AI, Software & Digital Solutions
  ======================================================= */

  {
    id: 3,

    slug: "ai-software-digital-solutions",

    number: "03",

    icon: BrainCircuit,

    name: "AI, Software & Digital Solutions",

    homeTitle: "AI, Software & Digital Solutions",

    homeDescription:
      "Design and build intelligent software, digital platforms, AI-enabled workflows, and scalable technology solutions.",

    showcaseTitle:
      "Intelligent Technology Built Around Your Business",

    showcaseDescription:
      "We engineer enterprise software, AI solutions, automation, web platforms, mobile products, and digital ecosystems designed to improve efficiency and unlock new growth.",

    features: [
      "Custom Software Development",
      "Artificial Intelligence & Automation",
      "Web & Mobile Applications",
      "Enterprise Digital Platforms",
    ],

    detail: {
      heroTitle:
        "AI and Software Solutions Built for Real Business Outcomes",

      heroDescription:
        "Turn complex operational challenges into scalable digital solutions. We combine software engineering, artificial intelligence, automation, cloud technologies, and user-centered product development.",

      overviewTitle:
        "Build Technology That Moves the Business Forward",

      overviewDescription:
        "Technology investments create value when they solve real operational problems, integrate with existing systems, and remain flexible enough to evolve as the organization grows.",

      overviewSecondaryDescription:
        "CyberX Soft works from discovery and architecture through design, development, integration, deployment, and optimization — giving enterprises one accountable technology partner throughout the product lifecycle.",

      overviewPoints: [
        "Business-first technology architecture designed around measurable outcomes.",
        "Secure and scalable engineering using modern development practices.",
        "AI and automation focused on practical enterprise use cases.",
        "Full lifecycle delivery from discovery through deployment and support.",
      ],

      coreServices: [
        {
          id: 1,

          title: "Custom Software Development",

          description:
            "Design and engineer scalable enterprise applications, internal platforms, portals, workflow systems, and custom business software.",
        },
        {
          id: 2,

          title: "Artificial Intelligence & Automation",

          description:
            "Implement AI assistants, intelligent automation, machine learning workflows, document processing, decision support, and productivity solutions.",
        },
        {
          id: 3,

          title: "Web & Mobile Applications",

          description:
            "Build responsive web platforms and mobile applications with modern interfaces, secure APIs, scalable architectures, and reliable performance.",
        },
        {
          id: 4,

          title: "Enterprise Digital Platforms",

          description:
            "Develop integrated digital ecosystems that connect business processes, data, customer experiences, and enterprise technology systems.",
        },
      ],

      capabilities: [
        {
          id: 1,

          title: "Product Discovery & Architecture",

          description:
            "Translate business requirements into technical roadmaps, system architecture, delivery priorities, and realistic implementation plans.",
        },
        {
          id: 2,

          title: "AI Integration",

          description:
            "Integrate generative AI, intelligent search, workflow automation, machine learning, and AI-enabled experiences into existing operations.",
        },
        {
          id: 3,

          title: "API & System Integration",

          description:
            "Connect platforms, applications, databases, third-party services, and legacy environments through secure integration layers.",
        },
        {
          id: 4,

          title: "Cloud-Native Engineering",

          description:
            "Build and modernize solutions using scalable cloud infrastructure, containerized services, automated deployment, and resilient architecture.",
        },
      ],
    },
  },

  /* =======================================================
     Data, Cybersecurity & Digital Governance
  ======================================================= */

  {
    id: 4,

    slug: "data-cybersecurity-digital-governance",

    number: "04",

    icon: ShieldCheck,

    name: "Data, Cybersecurity & Digital Governance",

    homeTitle: "Data, Cybersecurity & Digital Governance",

    homeDescription:
      "Protect critical systems, strengthen data capabilities, and establish resilient governance frameworks for digital operations.",

    showcaseTitle:
      "Secure, Govern and Unlock the Value of Enterprise Data",

    showcaseDescription:
      "We help organizations strengthen cybersecurity, improve data visibility, reduce technology risk, and build governance structures that support confident digital transformation.",

    features: [
      "Cybersecurity & Risk Management",
      "Data Engineering & Analytics",
      "Cloud & Infrastructure Security",
      "Digital Governance & Compliance",
    ],

    detail: {
      heroTitle:
        "Secure Digital Transformation With Data You Can Trust",

      heroDescription:
        "Strengthen cybersecurity, establish effective digital governance, and turn enterprise data into a strategic asset. Our integrated approach helps organizations innovate without compromising security, control, or compliance.",

      overviewTitle:
        "Security and Governance Built Into Transformation",

      overviewDescription:
        "As organizations become more digital, technology risk, fragmented data, regulatory pressure, and cyber threats become increasingly difficult to manage independently.",

      overviewSecondaryDescription:
        "CyberX Soft brings cybersecurity, data engineering, analytics, cloud security, and digital governance together to create environments that are secure, observable, compliant, and ready to scale.",

      overviewPoints: [
        "Risk-based cybersecurity aligned with business priorities.",
        "Trusted data foundations for analytics and decision-making.",
        "Governance frameworks that support accountability and compliance.",
        "Security integrated across cloud, applications, infrastructure, and users.",
      ],

      coreServices: [
        {
          id: 1,

          title: "Cybersecurity & Risk Management",

          description:
            "Assess security posture, identify vulnerabilities, prioritize risk, and implement controls that protect systems, users, data, and critical business operations.",
        },
        {
          id: 2,

          title: "Data Engineering & Analytics",

          description:
            "Build reliable data pipelines, reporting environments, analytical platforms, dashboards, and architectures that improve enterprise decision-making.",
        },
        {
          id: 3,

          title: "Cloud & Infrastructure Security",

          description:
            "Secure cloud environments, networks, identities, endpoints, workloads, and infrastructure through modern security architecture and continuous controls.",
        },
        {
          id: 4,

          title: "Digital Governance & Compliance",

          description:
            "Establish policies, accountability models, technology standards, compliance controls, and governance frameworks for enterprise digital operations.",
        },
      ],

      capabilities: [
        {
          id: 1,

          title: "Security Assessments",

          description:
            "Evaluate infrastructure, applications, cloud environments, processes, and controls to identify material security gaps and improvement priorities.",
        },
        {
          id: 2,

          title: "Data Platforms & Business Intelligence",

          description:
            "Create governed data environments, analytics models, dashboards, and reporting systems that provide consistent enterprise visibility.",
        },
        {
          id: 3,

          title: "Identity & Access Management",

          description:
            "Strengthen authentication, authorization, privileged access, user lifecycle management, and zero-trust security practices.",
        },
        {
          id: 4,

          title: "Governance, Risk & Compliance",

          description:
            "Build practical control frameworks, risk registers, policies, reporting structures, and compliance programs aligned with organizational requirements.",
        },
      ],
    },
  },

  /* =======================================================
     Talent Augmentation & Delivery Support
  ======================================================= */

  {
    id: 5,

    slug: "talent-augmentation-delivery-support",

    number: "05",

    icon: UsersRound,

    name: "Talent Augmentation & Delivery Support",

    homeTitle: "Talent Augmentation & Delivery Support",

    homeDescription:
      "Extend your team with experienced technology, creative, data, cybersecurity, and delivery specialists when and where you need them.",

    showcaseTitle:
      "Specialist Talent That Extends Your Delivery Capacity",

    showcaseDescription:
      "Access experienced professionals without the delays and overhead of traditional hiring. We provide flexible specialists and delivery teams that integrate directly into your operating model.",

    features: [
      "Dedicated Specialists",
      "Project Delivery Teams",
      "Flexible Staff Augmentation",
      "Managed Delivery Support",
    ],

    detail: {
      heroTitle:
        "The Right Specialists, Exactly When You Need Them",

      heroDescription:
        "Expand delivery capacity without slowing down your organization. CyberX Soft provides experienced technology, creative, cybersecurity, data, and project specialists who integrate directly with your teams and workflows.",

      overviewTitle:
        "Scale Capability Without Scaling Complexity",

      overviewDescription:
        "Enterprise projects often require specialist skills faster than traditional recruitment can provide. Internal teams may also need additional capacity during high-priority initiatives, transformation programs, or delivery peaks.",

      overviewSecondaryDescription:
        "Our augmentation and delivery models give organizations flexible access to experienced professionals, dedicated squads, and managed delivery capabilities while preserving control, transparency, and accountability.",

      overviewPoints: [
        "Rapid access to pre-qualified specialists across multiple disciplines.",
        "Flexible engagement models designed around project requirements.",
        "Professionals integrated into your tools, processes, and governance.",
        "Delivery oversight focused on quality, accountability, and continuity.",
      ],

      coreServices: [
        {
          id: 1,

          title: "Dedicated Specialists",

          description:
            "Add experienced developers, designers, architects, cybersecurity professionals, data specialists, marketers, and project experts to your existing team.",
        },
        {
          id: 2,

          title: "Project Delivery Teams",

          description:
            "Deploy cross-functional squads assembled around specific product, transformation, software, creative, data, or technology initiatives.",
        },
        {
          id: 3,

          title: "Flexible Staff Augmentation",

          description:
            "Increase or reduce delivery capacity according to changing workloads, project phases, specialist requirements, and operational priorities.",
        },
        {
          id: 4,

          title: "Managed Delivery Support",

          description:
            "Transfer defined delivery responsibilities to CXS while maintaining transparent governance, reporting, milestones, quality standards, and business accountability.",
        },
      ],

      capabilities: [
        {
          id: 1,

          title: "Technology Specialists",

          description:
            "Access software engineers, cloud professionals, solution architects, DevOps engineers, QA specialists, and technical leads.",
        },
        {
          id: 2,

          title: "Creative & Digital Specialists",

          description:
            "Extend your team with designers, animators, content professionals, UX specialists, digital marketers, and creative production talent.",
        },
        {
          id: 3,

          title: "Cybersecurity & Data Specialists",

          description:
            "Bring in security analysts, governance specialists, data engineers, BI professionals, cloud security specialists, and technical consultants.",
        },
        {
          id: 4,

          title: "Project & Delivery Management",

          description:
            "Strengthen execution with project managers, scrum leads, business analysts, delivery managers, coordinators, and program support specialists.",
        },
      ],
    },
  },
];

/* =========================================================
   Service Lookup
========================================================= */

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

/* =========================================================
   Services Page — Why CyberX Soft
========================================================= */

export const serviceCapabilities = [
  {
    id: 1,

    icon: DatabaseZap,

    title: "Integrated Delivery",

    description:
      "Strategy, creative, technology, data, cybersecurity, and delivery capabilities coordinated under one partner.",
  },
  {
    id: 2,

    icon: UsersRound,

    title: "Senior-Led Engagements",

    description:
      "Experienced specialists stay close to every engagement, from discovery and architecture through execution and optimization.",
  },
  {
    id: 3,

    icon: BrainCircuit,

    title: "Technology-Agnostic",

    description:
      "We recommend solutions based on your requirements rather than forcing a predefined technology stack or vendor ecosystem.",
  },
  {
    id: 4,

    icon: ChartNoAxesCombined,

    title: "Outcome-Based SLAs",

    description:
      "Delivery is structured around measurable milestones, quality standards, performance indicators, and business outcomes.",
  },
  {
    id: 5,

    icon: ShieldCheck,

    title: "Transparent Reporting",

    description:
      "Clear visibility into progress, risks, priorities, performance, and next actions throughout the engagement.",
  },
  {
    id: 6,

    icon: UsersRound,

    title: "Global Delivery, Local Presence",

    description:
      "Flexible delivery models combine distributed specialist capability with responsive client engagement and collaboration.",
  },
];

/* =========================================================
   Services Page FAQ
========================================================= */

export const servicesFaqs = [
  {
    id: 1,

    question:
      "Can CyberX Soft support multiple services within one engagement?",

    answer:
      "Yes. Many enterprise challenges cross multiple disciplines. We can combine strategy, creative, software, AI, data, cybersecurity, and specialist delivery resources into one coordinated engagement.",
  },
  {
    id: 2,

    question:
      "Do you work with existing internal teams and technology partners?",

    answer:
      "Yes. We regularly work alongside internal departments, agencies, software vendors, cloud providers, consultants, and other technology partners. Our delivery model is designed to integrate with the way your organization already operates.",
  },
  {
    id: 3,

    question:
      "How do you determine the right engagement model?",

    answer:
      "We start with your business objectives, timeline, internal capabilities, technical environment, delivery risks, and required outcomes. From there, we recommend an appropriate project, managed service, dedicated team, or augmentation model.",
  },
];