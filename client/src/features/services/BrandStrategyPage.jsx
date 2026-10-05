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
  brandStrategyOutcomes,
  brandStrategyAudiences,
  brandStrategyUseCases,
  brandStrategyCoreServices,
  brandStrategyCapabilities,
  brandStrategyDeliverables,
  brandStrategyEngagementOptions,
  brandStrategyProcess,
  brandStrategyFaqs,
} from "./brandStrategyData";

import "./brandStrategy.css";

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="brand-strategy__section-heading">
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

function BrandStrategyPage() {
  return (
    <main className="brand-strategy">
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="Brand Strategy & Digital Growth"
        title="Build a Clearer Brand and a More Accountable Growth Engine"
        description="We combine market understanding, positioning, campaign strategy, performance marketing, content planning, and analytics to help organizations reach the right audience and improve commercial results."
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label:
              "Brand Strategy & Digital Growth",
          },
        ]}
        action={{
          label: "Book a Consultation",
          path: "/contact",
        }}
        visualLabel="Brand Strategy & Digital Growth Hero Image"
      />

      {/* ========================================
          SERVICE OVERVIEW
      ======================================== */}

      <section className="brand-strategy__section">
        <div className="container brand-strategy__overview">
          <div className="brand-strategy__overview-content">
            <span className="eyebrow">
              Service Overview
            </span>

            <h2>
              Connect Brand Decisions to Growth
              Priorities
            </h2>

            <p>
              A strong brand gives customers a
              clear reason to choose you. A
              disciplined growth programme then
              turns that position into campaigns,
              content, channels, and measurable
              demand.
            </p>

            <p>
              CyberX Soft brings these activities
              together so strategy and execution
              reinforce each other.
            </p>

            <Link
              to="/contact"
              className="brand-strategy__primary-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="brand-strategy__outcomes">
            <h3>
              What the Engagement Should Produce
            </h3>

            <div className="brand-strategy__outcomes-list">
              {brandStrategyOutcomes.map(
                (outcome) => (
                  <article
                    className="brand-strategy__outcome"
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

      <section className="brand-strategy__section brand-strategy__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Who This Service Is For"
            title="For Teams That Need Clearer Positioning and Better Growth Decisions"
            description="This service is designed for organizations that need stronger alignment between brand strategy, marketing activity, and commercial priorities."
          />

          <div className="brand-strategy__audience-grid">
            {brandStrategyAudiences.map(
              (audience) => (
                <div
                  className="brand-strategy__audience-card"
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

      <section className="brand-strategy__section">
        <div className="container">
          <SectionHeading
            eyebrow="When It Becomes Useful"
            title="Recognize the Signals That Strategy and Growth Need to Reconnect"
            description="The service becomes especially useful when customers, teams, or management are struggling with clarity, consistency, conversion, or performance visibility."
          />

          <div className="brand-strategy__grid brand-strategy__grid--two">
            {brandStrategyUseCases.map(
              (item) => (
                <article
                  className="brand-strategy__card"
                  key={item.id}
                >
                  <span className="brand-strategy__number">
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

      <section className="brand-strategy__section brand-strategy__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="What We Deliver"
            description="The work can combine positioning, digital strategy, campaign planning, content direction, performance marketing, and measurement."
          />

          <div className="brand-strategy__grid brand-strategy__grid--two">
            {brandStrategyCoreServices.map(
              (service) => (
                <article
                  className="brand-strategy__card brand-strategy__service-card"
                  key={service.id}
                >
                  <span className="brand-strategy__number">
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

      <section className="brand-strategy__section brand-strategy__section--dark">
        <div className="container brand-strategy__capabilities-layout">
          <div className="brand-strategy__capabilities-copy">
            <span className="eyebrow">
              Capabilities
            </span>

            <h2>
              Scope Available Within This
              Service
            </h2>

            <p>
              The exact mix depends on the
              requirement, internal capability,
              commercial priorities, and stage of
              the engagement.
            </p>
          </div>

          <div className="brand-strategy__capabilities-grid">
            {brandStrategyCapabilities.map(
              (capability) => (
                <div
                  className="brand-strategy__capability-item"
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

      <section className="brand-strategy__section">
        <div className="container">
          <SectionHeading
            eyebrow="Typical Deliverables"
            title="Practical Outputs Your Team Can Use"
            description="Deliverables are agreed according to the engagement, but may include the following strategy, campaign, conversion, and measurement outputs."
          />

          <div className="brand-strategy__grid brand-strategy__grid--three">
            {brandStrategyDeliverables.map(
              (deliverable) => (
                <article
                  className="brand-strategy__card"
                  key={deliverable.id}
                >
                  <span className="brand-strategy__number">
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

      <section className="brand-strategy__section brand-strategy__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement Options"
            title="Choose a Starting Point That Fits the Requirement"
            description="The right structure depends on scope clarity, internal ownership, required skills, urgency, and the level of delivery responsibility CyberX Soft is expected to accept."
          />

          <div className="brand-strategy__grid brand-strategy__grid--three">
            {brandStrategyEngagementOptions.map(
              (option) => (
                <article
                  className="brand-strategy__card"
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

          <div className="brand-strategy__callout">
            <div>
              <span className="eyebrow">
                Not Sure Where to Begin?
              </span>

              <h3>
                Start With the Business
                Challenge
              </h3>

              <p>
                Share the objective, timeline,
                current capabilities, and
                expected outcome. We can help
                define a practical starting
                point and engagement model.
              </p>
            </div>

            <Link
              to="/contact"
              className="brand-strategy__callout-link"
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

      <section className="brand-strategy__section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery"
            title="How We Work"
            description="The engagement begins with the objective, current environment, users, constraints, risks, and evidence of success before scope and delivery responsibilities are agreed."
          />

          <div className="brand-strategy__process-grid">
            {brandStrategyProcess.map(
              (step) => (
                <article
                  className="brand-strategy__process-card"
                  key={step.id}
                >
                  <span className="brand-strategy__process-number">
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
        items={brandStrategyFaqs}
        title="Brand Strategy & Digital Growth FAQs"
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

export default BrandStrategyPage;