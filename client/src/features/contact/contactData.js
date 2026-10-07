
import { siteConfig } from "../../config/siteConfig";

export const contactDetails = {
  responseTime:
    "We aim to respond within one business day.",

  // Business hours must be confirmed before publication.
  // Add the actual Pakistan working hours here once approved.
  businessHours: null,
};

export const offices = [
  {
    id: 1,
    city: "Rawalpindi",
    countryCode: "Pakistan",
    address: siteConfig.address,
    phone: siteConfig.phone,
  },
];

export const contactFaqs = [
  {
    id: 1,
    question: "What information should I include in my enquiry?",
    answer:
      "Describe the objective, users or business area affected, current systems or approach, expected timeline, and any known budget, security, compliance, or integration constraints.",
  },
  {
    id: 2,
    question: "Can you sign a non-disclosure agreement?",
    answer:
      "Yes. Where sensitive business or technical information is required for discovery, the parties can agree an appropriate non-disclosure arrangement before detailed disclosure.",
  },
  {
    id: 3,
    question: "Can we begin with a small discovery engagement?",
    answer:
      "Yes. A focused discovery can clarify requirements, risks, priorities, architecture, delivery options, and a realistic implementation roadmap before a larger commitment.",
  },
  {
    id: 4,
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. CyberX Soft can support international engagements through remote collaboration and agreed delivery arrangements, subject to scope, time zone, contracting, and compliance requirements.",
  },
];
