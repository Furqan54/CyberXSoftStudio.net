
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PageHero from "../../components/PageHero";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import ServiceShowcase from "./ServiceShowcase";
import ServiceCapabilities from "./ServiceCapabilities";

import {
  services,
  servicesFaqs,
} from "./servicesData";

import "./services.css";
import "./servicesOverview.css";

// Engagement models from the CEO's Services brief.
// Availability and commercial terms are agreed with
// each client before an engagement begins.
const engagementModels = [
  {
    id: 1,
    title: "Defined Project",
    description:
      "For work with a clear outcome, scope, delivery period, and acceptance criteria.",
  },
  {
    id: 2,
    title: "Discovery and Roadmap",
    description:
      "For requirements that need research, prioritization, architecture, or planning before implementation.",
  },
  {
    id: 3,
    title: "Dedicated Resource",
    description:
      "For clients who need one specialist working alongside their team on an agreed monthly or hourly basis.",
  },
  {
    id: 4,
    title: "Managed Technical Pod",
    description:
      "For work that needs a coordinated team, with agreed delivery oversight, reporting, and quality review.",
  },
  {
    id: 5,
    title: "White-Label Offshore Team",
    description:
      "For software firms, agencies, and other partners that need confidential delivery capacity behind their own brand.",
  },
  {
    id: 6,
    title: "Direct Placement or EOR Facilitation",
    description:
      "For longer-term staffing requirements where a separate placement or employer-of-record arrangement may be suitable, subject to availability and agreed terms.",
  },
];

const startingPoints = [
  {
    id: 1,
    title: "Choose a Defined Project",
    description:
      "When you know what needs to be delivered and can agree on the scope and acceptance criteria.",
  },
  {
    id: 2,
    title: "Choose Staff Augmentation",
    description:
      "When your team will manage day-to-day priorities but needs additional specialist capacity.",
  },
  {
    id: 3,
    title: "Choose a Managed Pod",
    description:
      "When a workstream needs both the right specialists and coordinated delivery management.",
  },
  {
    id: 4,
    title: "Choose White-Label Delivery",
    description:
      "When your company needs confidential offshore delivery support under its own brand.",
  },
];

function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Capabilities That Work Together Around Your Priorities"
        description="CyberX Soft provides five connected service areas spanning strategy, creative execution, engineering, security, data, and delivery capacity. Engage one specialist team or combine services through a coordinated program."
        breadcrumbs={[
          {
            label: "Services",
          },
        ]}
        action={{
          label: "Discuss Your Requirements",
          path: "/contact",
        }}
      />

      {/* ========================================
          Five service pillars
      ======================================== */}

      <section className="services-showcase-section">
        <div className="container services-showcase-list">
          {services.map((service, index) => (
            <ServiceShowcase
              key={service.id}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          Existing Why CyberX Soft section
      ======================================== */}

      <ServiceCapabilities />

      {/* ========================================
          Engagement models
      ======================================== */}

      <section
        className="services-engagement"
        aria-labelledby="services-engagement-heading"
      >
        <div className="container">
          <div className="services-engagement__header">
            <span className="eyebrow">
              Ways to Work With Us
            </span>

            <h2
              id="services-engagement-heading"
              className="services-engagement__title"
            >
              Choose an Engagement Model That Fits
              Your Requirements
            </h2>

            <p className="services-engagement__description">
              You can work with CyberX Soft on a
              defined project, add individual
              specialists, or bring in a coordinated
              delivery team. The right arrangement
              depends on your goals, internal capacity,
              and delivery responsibilities.
            </p>
          </div>

          <div className="services-engagement__grid">
            {engagementModels.map((model) => (
              <article
                className="services-engagement__card"
                key={model.id}
              >
                <span className="services-engagement__number">
                  {String(model.id).padStart(2, "0")}
                </span>

                <h3>{model.title}</h3>

                <p>{model.description}</p>
              </article>
            ))}
          </div>

          {/* Staff augmentation highlight */}

          <div className="services-engagement__callout">
            <div className="services-engagement__callout-content">
              <span className="eyebrow">
                Staff Augmentation
              </span>

              <h3>
                Need More Delivery Capacity?
              </h3>

              <p>
                Explore how dedicated specialists,
                remote teams, managed pods, and
                white-label support can work alongside
                your existing team.
              </p>
            </div>

            <Link
              className="services-engagement__callout-link"
              to="/services/talent-augmentation-delivery-support"
            >
              Explore Staff Augmentation

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* ====================================
              Starting-point guidance
          ==================================== */}

          <div className="services-starting-points">
            <div className="services-starting-points__header">
              <span className="eyebrow">
                Finding the Right Fit
              </span>

              <h2>
                How to Choose the Right Starting Point
              </h2>

              <p>
                Different requirements call for
                different ways of working. These
                examples can help you identify where
                to begin.
              </p>
            </div>

            <div className="services-starting-points__grid">
              {startingPoints.map((point) => (
                <article
                  className="services-starting-points__card"
                  key={point.id}
                >
                  <h3>{point.title}</h3>

                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Frequently asked questions
      ======================================== */}

      <FAQSection
        items={servicesFaqs}
        title="Frequently Asked Questions"
      />

      {/* ========================================
          Final consultation CTA
      ======================================== */}

      <CTASection
        title="Start With the Outcome"
        description="You do not need to define the technology or delivery model before contacting us. Share your business objective, current challenge, timeline, and available internal capacity. We will help you identify a practical starting point."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default ServicesPage;
