/*
 * CYBERX SOFT
 * WORK / CASE STUDIES
 *
 * Source:
 * CEO Website Content and Image Brief
 *
 * Important:
 * Only verified and client-approved project claims
 * should be published as case studies.
 */

export const workHero = {
  eyebrow: "Work",
  title: "Selected Work Shaped Around Real Operating Needs",
  description:
    "Our work spans digital platforms, brand development, content ecosystems, business systems, cybersecurity, software, and specialist delivery. Each published case study should explain the problem, scope, approach, deliverables, and verified outcome.",
};

export const workIntro = {
  eyebrow: "Selected Work",
  title: "Evidence Before Claims",
  description:
    "CyberX Soft publishes project stories only when the engagement context, responsibilities, deliverables, technologies, and outcomes can be represented accurately. Where client confidentiality applies, details should be anonymized without implying unsupported results.",
};

export const caseStudyStructure = [
  {
    id: 1,
    title: "Client Context",
    description:
      "Explain the sector, users, scale, and operating environment without exposing unnecessary confidential information.",
  },
  {
    id: 2,
    title: "Challenge",
    description:
      "Describe the observable problem, constraint, risk, or missed opportunity that created the need for the engagement.",
  },
  {
    id: 3,
    title: "Scope",
    description:
      "Define the services, responsibilities, workstreams, and delivery boundaries assigned to CyberX Soft.",
  },
  {
    id: 4,
    title: "Approach",
    description:
      "Explain how discovery, design, engineering, implementation, collaboration, governance, or delivery was structured.",
  },
  {
    id: 5,
    title: "Solution",
    description:
      "Show the platform, system, campaign, framework, content, creative output, or delivery model that was produced.",
  },
  {
    id: 6,
    title: "Verified Outcome",
    description:
      "Publish only client-approved and evidenced results, including the relevant baseline and measurement period where appropriate.",
  },
  {
    id: 7,
    title: "Technology & Capabilities",
    description:
      "List only the technologies, platforms, methods, and capabilities that were actually used in the engagement.",
  },
];

/*
 * Published case studies remain empty until
 * relationship, scope, client approval, and
 * outcome evidence are confirmed.
 */
export const publishedCaseStudies = [];

/*
 * Internal preparation list.
 *
 * These should NOT be rendered publicly until
 * approval and evidence have been confirmed.
 */
export const pendingCaseStudyCandidates = [
  {
    id: 1,
    name: "Guide to Pakistan",
    context: "Tourism information and services",
    suggestedScope:
      "Digital platform, content structure, destination storytelling, search visibility, and visitor journey.",
    evidenceNeeded:
      "Verified platform milestones, content volume, audience reach, enquiry growth, or other approved outcomes.",
    publish: false,
  },
  {
    id: 2,
    name: "Lagaam",
    context: "Digital media and editorial content",
    suggestedScope:
      "Editorial positioning, story development, production workflows, visual communication, and digital distribution.",
    evidenceNeeded:
      "Approved publishing frequency, audience metrics, production outcomes, or other verified evidence.",
    publish: false,
  },
  {
    id: 3,
    name: "Mediabuzz Global",
    context:
      "Real estate marketing and business enablement",
    suggestedScope:
      "Brand communication, campaign support, digital materials, lead-generation infrastructure, and project collaboration.",
    evidenceNeeded:
      "Approved campaign, lead, delivery, or other measurable results.",
    publish: false,
  },
  {
    id: 4,
    name: "Confidential Enterprise Engagement",
    context:
      "Technology or delivery support",
    suggestedScope:
      "Describe the business problem, CyberX Soft role, delivery model, and solution without revealing protected client information.",
    evidenceNeeded:
      "An approved anonymized metric or qualitative client outcome.",
    publish: false,
  },
];

export const workPublishingPrinciples = [
  "Use authentic project images, approved interfaces, or accurate mockups rather than unrelated stock photography.",
  "Publish only client-authorized outcomes and evidence.",
  "Redact confidential or sensitive information from screenshots and project materials.",
  "List only technologies and platforms actually used.",
  "Use anonymized engagement summaries where confidentiality prevents naming the client.",
];

export const workCta = {
  title: "Discuss a Similar Requirement",
  description:
    "Tell us what you are trying to build, improve, protect, or deliver. We can help define the scope, responsibilities, and practical starting point.",
  buttonLabel: "Book a Consultation",
  buttonPath: "/contact",
};