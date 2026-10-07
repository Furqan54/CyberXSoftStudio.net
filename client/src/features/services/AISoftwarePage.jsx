import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  CheckCircle2,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import {
  aiSoftwareOutcomes,
  aiSoftwareAudiences,
  aiSoftwareUseCases,
  aiSoftwareCoreServices,
  aiSoftwareCapabilities,
  aiSoftwareDeliverables,
  aiSoftwareEngagementOptions,
  aiSoftwareProcess,
  aiSoftwareFaqs,
} from "./aiSoftwareData";

import "./aiSoftware.css";

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="ai-software__section-heading">
      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

function AISoftwarePage() {
  return (
    <main className="ai-software">
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="AI Software and Digital Solutions"
        title="Build Digital Solutions That Fit the Way Your Business Works"
        description="CyberX Soft designs and develops software, AI-enabled workflows, web and mobile products, integrations, and digital platforms around real operational needs, user requirements, and measurable outcomes."
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label:
              "AI Software and Digital Solutions",
          },
        ]}
        action={{
          label: "Book a Consultation",
          path: "/contact",
        }}
        visualLabel="AI Software and Digital Solutions Hero Image"
      />

      {/* ========================================
          SERVICE OVERVIEW
      ======================================== */}

      <section className="ai-software__section">
        <div className="container ai-software__overview">
          <div className="ai-software__overview-content">
            <span className="eyebrow">
              Service Overview
            </span>

            <h2>
              Start With the Problem Before
              Selecting the Technology
            </h2>

            <p>
              Good software reduces friction,
              improves visibility, and supports
              better decisions.
            </p>

            <p>
              We work from discovery and
              architecture through design,
              engineering, integration, testing,
              deployment, and support so the
              solution remains usable, secure,
              and maintainable.
            </p>

            <Link
              to="/contact"
              className="ai-software__primary-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="ai-software__outcomes">
            <h3>
              What the Engagement Should Produce
            </h3>

            <div className="ai-software__outcomes-list">
              {aiSoftwareOutcomes.map(
                (outcome) => (
                  <article
                    className="ai-software__outcome"
                    key={outcome.id}
                  >
                    <CheckCircle2
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <div>
                      <h4>
                        {outcome.title}
                      </h4>

                      <p>
                        {outcome.description}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHO THIS SERVICE IS FOR
      ======================================== */}

      <section className="ai-software__section ai-software__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Who This Service Is For"
            title="For Teams Building, Modernizing, or Connecting Digital Products"
            description="This service is designed for organizations creating new digital products, improving internal systems, integrating platforms, or validating practical AI opportunities."
          />

          <div className="ai-software__audience-grid">
            {aiSoftwareAudiences.map(
              (audience) => (
                <div
                  className="ai-software__audience-card"
                  key={audience}
                >
                  <Check
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>{audience}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          WHEN THIS SERVICE IS USEFUL
      ======================================== */}

      <section className="ai-software__section">
        <div className="container">
          <SectionHeading
            eyebrow="When It Becomes Useful"
            title="Recognize When the Technology Needs to Change"
            description="The service becomes useful when existing systems, workflows, applications, or product ideas are no longer supporting the way the organization needs to operate."
          />

          <div className="ai-software__grid ai-software__grid--two">
            {aiSoftwareUseCases.map(
              (item) => (
                <article
                  className="ai-software__card"
                  key={item.id}
                >
                  <span className="ai-software__number">
                    {String(item.id).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          CORE SERVICES
      ======================================== */}

      <section className="ai-software__section ai-software__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="What We Deliver"
            description="The work can combine software engineering, AI and automation, web and mobile development, integration, and enterprise platform delivery."
          />

          <div className="ai-software__grid ai-software__grid--two">
            {aiSoftwareCoreServices.map(
              (service) => (
                <article
                  className="ai-software__card ai-software__service-card"
                  key={service.id}
                >
                  <span className="ai-software__number">
                    {String(
                      service.id
                    ).padStart(2, "0")}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          CAPABILITIES
      ======================================== */}

      <section className="ai-software__section ai-software__section--dark">
        <div className="container ai-software__capabilities-layout">
          <div className="ai-software__capabilities-copy">
            <span className="eyebrow">
              Capabilities
            </span>

            <h2>
              Scope Available Within This Service
            </h2>

            <p>
              The exact mix depends on the
              problem, users, architecture,
              current systems, security needs,
              data, integrations, and delivery
              responsibilities.
            </p>
          </div>

          <div className="ai-software__capabilities-grid">
            {aiSoftwareCapabilities.map(
              (capability) => (
                <div
                  className="ai-software__capability-item"
                  key={capability}
                >
                  <Check
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>
                    {capability}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          DELIVERABLES
      ======================================== */}

      <section className="ai-software__section">
        <div className="container">
          <SectionHeading
            eyebrow="Typical Deliverables"
            title="Practical Outputs From Discovery Through Release"
            description="Deliverables depend on the engagement but can cover discovery, architecture, working software, testing, documentation, release planning, and continuing improvement."
          />

          <div className="ai-software__grid ai-software__grid--three">
            {aiSoftwareDeliverables.map(
              (deliverable) => (
                <article
                  className="ai-software__card"
                  key={deliverable.id}
                >
                  <span className="ai-software__number">
                    {String(
                      deliverable.id
                    ).padStart(2, "0")}
                  </span>

                  <h3>
                    {deliverable.title}
                  </h3>

                  <p>
                    {deliverable.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          ENGAGEMENT OPTIONS
      ======================================== */}

      <section className="ai-software__section ai-software__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement Options"
            title="Choose a Delivery Model That Fits the Requirement"
            description="The right model depends on scope clarity, internal ownership, required capabilities, urgency, security, and the level of delivery responsibility CyberX Soft is expected to accept."
          />

          <div className="ai-software__grid ai-software__grid--three">
            {aiSoftwareEngagementOptions.map(
              (option) => (
                <article
                  className="ai-software__card"
                  key={option.id}
                >
                  <h3>
                    {option.title}
                  </h3>

                  <p>
                    {option.description}
                  </p>
                </article>
              )
            )}
          </div>

          <div className="ai-software__callout">
            <div>
              <span className="eyebrow">
                Discovery First
              </span>

              <h3>
                Not Every Requirement Should Start With Development
              </h3>

              <p>
                When users, integrations,
                architecture, data, risk, or
                acceptance criteria are still
                unclear, a focused discovery can
                reduce uncertainty before larger
                implementation work begins.
              </p>
            </div>

            <Link
              to="/contact"
              className="ai-software__callout-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          DELIVERY PROCESS
      ======================================== */}

      <section className="ai-software__section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery"
            title="How We Work"
            description="The engagement begins with the objective, users, current environment, risks, constraints, and evidence of success before scope and technical direction are agreed."
          />

          <div className="ai-software__process-grid">
            {aiSoftwareProcess.map(
              (step) => (
                <article
                  className="ai-software__process-card"
                  key={step.id}
                >
                  <span className="ai-software__process-number">
                    {String(
                      step.id
                    ).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ
      ======================================== */}

      <FAQSection
        items={aiSoftwareFaqs}
        title="AI Software and Digital Solutions FAQs"
      />

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <CTASection
        title="Discuss Your Requirements"
        description="Share the challenge, timeline, current capabilities, and expected outcome. We will recommend a practical starting point and engagement model."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default AISoftwarePage;