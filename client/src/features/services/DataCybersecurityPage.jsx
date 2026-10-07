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
  dataCybersecurityOutcomes,
  dataCybersecurityAudiences,
  dataCybersecurityUseCases,
  dataCybersecurityCoreServices,
  dataCybersecurityCapabilities,
  dataCybersecurityDeliverables,
  dataCybersecurityEngagementOptions,
  dataCybersecurityProcess,
  dataCybersecurityFaqs,
} from "./dataCybersecurityData";

import "./dataCybersecurity.css";

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="data-cybersecurity__section-heading">
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

function DataCybersecurityPage() {
  return (
    <main className="data-cybersecurity">
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="Data Cybersecurity and Digital Governance"
        title="Use Data With Confidence and Manage Digital Risk With Clarity"
        description="We help organizations improve data foundations, strengthen cybersecurity, secure cloud and identity environments, and establish governance that supports accountable digital operations."
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label:
              "Data Cybersecurity and Digital Governance",
          },
        ]}
        action={{
          label: "Book a Consultation",
          path: "/contact",
        }}
        visualLabel="Data Cybersecurity and Digital Governance Hero Image"
      />

      {/* ========================================
          SERVICE OVERVIEW
      ======================================== */}

      <section className="data-cybersecurity__section">
        <div className="container data-cybersecurity__overview">
          <div className="data-cybersecurity__overview-content">
            <span className="eyebrow">
              Service Overview
            </span>

            <h2>
              Treat Security Data and Governance
              as Connected Responsibilities
            </h2>

            <p>
              Digital services depend on trusted
              data, controlled access, resilient
              infrastructure, clear accountability,
              and evidence that controls work.
            </p>

            <p>
              CyberX Soft addresses these
              requirements together, helping
              organizations prioritize material
              risks and improve decision visibility.
            </p>

            <Link
              to="/contact"
              className="data-cybersecurity__primary-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="data-cybersecurity__outcomes">
            <h3>
              What the Engagement Should Produce
            </h3>

            <div className="data-cybersecurity__outcomes-list">
              {dataCybersecurityOutcomes.map(
                (outcome) => (
                  <article
                    className="data-cybersecurity__outcome"
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

      <section className="data-cybersecurity__section data-cybersecurity__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Who This Service Is For"
            title="For Teams Responsible for Data, Risk, Security and Accountability"
            description="This service supports organizations that need stronger decision visibility, better security controls, clearer ownership, or evidence that digital risks are being managed properly."
          />

          <div className="data-cybersecurity__audience-grid">
            {dataCybersecurityAudiences.map(
              (audience) => (
                <div
                  className="data-cybersecurity__audience-card"
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

      <section className="data-cybersecurity__section">
        <div className="container">
          <SectionHeading
            eyebrow="When It Becomes Useful"
            title="Recognize When Risk, Data or Governance Needs Attention"
            description="The service becomes useful when visibility, security controls, ownership, reporting, or evidence no longer match the organization’s operating requirements."
          />

          <div className="data-cybersecurity__grid data-cybersecurity__grid--two">
            {dataCybersecurityUseCases.map(
              (item) => (
                <article
                  className="data-cybersecurity__card"
                  key={item.id}
                >
                  <span className="data-cybersecurity__number">
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

      <section className="data-cybersecurity__section data-cybersecurity__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="What We Deliver"
            description="The engagement can combine cybersecurity, data engineering, business intelligence, cloud and identity security, governance, risk, and compliance support."
          />

          <div className="data-cybersecurity__grid data-cybersecurity__grid--two">
            {dataCybersecurityCoreServices.map(
              (service) => (
                <article
                  className="data-cybersecurity__card data-cybersecurity__service-card"
                  key={service.id}
                >
                  <span className="data-cybersecurity__number">
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

      <section className="data-cybersecurity__section data-cybersecurity__section--dark">
        <div className="container data-cybersecurity__capabilities-layout">
          <div className="data-cybersecurity__capabilities-copy">
            <span className="eyebrow">
              Capabilities
            </span>

            <h2>
              Scope Available Within This Service
            </h2>

            <p>
              The exact scope depends on the
              organization’s data environment,
              technology estate, risk profile,
              control maturity, assurance needs,
              and operating responsibilities.
            </p>
          </div>

          <div className="data-cybersecurity__capabilities-grid">
            {dataCybersecurityCapabilities.map(
              (capability) => (
                <div
                  className="data-cybersecurity__capability-item"
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

      <section className="data-cybersecurity__section">
        <div className="container">
          <SectionHeading
            eyebrow="Typical Deliverables"
            title="Practical Outputs for Risk, Data and Governance Improvement"
            description="Deliverables can range from current-state assessments and control roadmaps to governed data, policies, remediation support, monitoring, and management reporting."
          />

          <div className="data-cybersecurity__grid data-cybersecurity__grid--three">
            {dataCybersecurityDeliverables.map(
              (deliverable) => (
                <article
                  className="data-cybersecurity__card"
                  key={deliverable.id}
                >
                  <span className="data-cybersecurity__number">
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

      <section className="data-cybersecurity__section data-cybersecurity__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement Options"
            title="Structure the Work Around the Requirement"
            description="The right engagement model depends on scope clarity, internal ownership, required skills, urgency, security, and the level of delivery responsibility CyberX Soft is expected to accept."
          />

          <div className="data-cybersecurity__grid data-cybersecurity__grid--three">
            {dataCybersecurityEngagementOptions.map(
              (option) => (
                <article
                  className="data-cybersecurity__card"
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

          <div className="data-cybersecurity__callout">
            <div>
              <span className="eyebrow">
                Assurance & Readiness
              </span>

              <h3>
                Prepare for Assurance Without Making Unsupported Certification Claims
              </h3>

              <p>
                CyberX Soft can support assessment,
                control design, remediation,
                documentation, evidence preparation,
                and readiness activity. Formal
                certification or independent
                assurance remains the responsibility
                of an appropriately authorized
                external body.
              </p>
            </div>

            <Link
              to="/contact"
              className="data-cybersecurity__callout-link"
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

      <section className="data-cybersecurity__section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery"
            title="How We Work"
            description="We begin with the objective, current environment, users, constraints, risks, ownership, and evidence of success before agreeing the scope and delivery model."
          />

          <div className="data-cybersecurity__process-grid">
            {dataCybersecurityProcess.map(
              (step) => (
                <article
                  className="data-cybersecurity__process-card"
                  key={step.id}
                >
                  <span className="data-cybersecurity__process-number">
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
        items={dataCybersecurityFaqs}
        title="Data Cybersecurity and Digital Governance FAQs"
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

export default DataCybersecurityPage;