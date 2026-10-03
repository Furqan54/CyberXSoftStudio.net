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
  creativeMediaOutcomes,
  creativeMediaAudiences,
  creativeMediaUseCases,
  creativeMediaCoreServices,
  creativeMediaCapabilities,
  creativeMediaDeliverables,
  creativeMediaEngagementOptions,
  creativeMediaProcess,
  creativeMediaFaqs,
} from "./creativeMediaData";

import "./creativeMedia.css";

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="creative-media__section-heading">
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

function CreativeMediaPage() {
  return (
    <main className="creative-media">
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="Creative Media, Design & Animation"
        title="Creative Work That Makes Complex Ideas Clear and Memorable"
        description="Our designers, animators, writers, and producers translate strategy into brand systems, campaigns, interfaces, video, animation, and digital content designed for the channels where your audience engages."
        breadcrumbs={[
          {
            label: "Services",
            path: "/services",
          },
          {
            label:
              "Creative Media, Design & Animation",
          },
        ]}
        action={{
          label: "Book a Consultation",
          path: "/contact",
        }}
        visualLabel="Creative Media, Design & Animation Hero Image"
      />

      {/* ========================================
          SERVICE OVERVIEW
      ======================================== */}

      <section className="creative-media__section">
        <div className="container creative-media__overview">
          <div className="creative-media__overview-content">
            <span className="eyebrow">
              Service Overview
            </span>

            <h2>
              Create With a Clear Communication Objective
            </h2>

            <p>
              Effective creative work begins with
              the audience, message, and desired
              response.
            </p>

            <p>
              We establish the concept and visual
              system first, then apply it consistently
              across digital channels, campaigns,
              presentations, products, and ongoing
              content.
            </p>

            <Link
              to="/contact"
              className="creative-media__primary-link"
            >
              Discuss Your Requirements

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="creative-media__outcomes">
            <h3>
              What the Engagement Should Produce
            </h3>

            <div className="creative-media__outcomes-list">
              {creativeMediaOutcomes.map(
                (outcome) => (
                  <article
                    className="creative-media__outcome"
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

      <section className="creative-media__section creative-media__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Who This Service Is For"
            title="For Teams With Ongoing Creative and Communication Needs"
            description="This service is suited to organizations that need stronger visual consistency, campaign production, motion, video, design, or recurring content support."
          />

          <div className="creative-media__audience-grid">
            {creativeMediaAudiences.map(
              (audience) => (
                <div
                  className="creative-media__audience-card"
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

      <section className="creative-media__section">
        <div className="container">
          <SectionHeading
            eyebrow="When It Becomes Useful"
            title="Recognize When Creative Delivery Needs More Structure"
            description="The service becomes useful when brand consistency, complex communication, campaign production, or recurring creative demand begins to strain internal capacity."
          />

          <div className="creative-media__grid creative-media__grid--two">
            {creativeMediaUseCases.map(
              (item) => (
                <article
                  className="creative-media__card"
                  key={item.id}
                >
                  <span className="creative-media__number">
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

      <section className="creative-media__section creative-media__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Core Services"
            title="What We Deliver"
            description="Creative delivery can combine brand identity, campaign design, motion, animation, video, digital experience, and scalable content production."
          />

          <div className="creative-media__grid creative-media__grid--two">
            {creativeMediaCoreServices.map(
              (service) => (
                <article
                  className="creative-media__card creative-media__service-card"
                  key={service.id}
                >
                  <span className="creative-media__number">
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

      <section className="creative-media__section creative-media__section--dark">
        <div className="container creative-media__capabilities-layout">
          <div className="creative-media__capabilities-copy">
            <span className="eyebrow">
              Capabilities
            </span>

            <h2>
              Scope Available Within This Service
            </h2>

            <p>
              The exact mix depends on the
              communication objective, channels,
              production requirements, internal
              capability, and expected volume of
              ongoing creative work.
            </p>
          </div>

          <div className="creative-media__capabilities-grid">
            {creativeMediaCapabilities.map(
              (capability) => (
                <div
                  className="creative-media__capability-item"
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

      <section className="creative-media__section">
        <div className="container">
          <SectionHeading
            eyebrow="Typical Deliverables"
            title="Practical Creative Outputs for Reuse and Delivery"
            description="Deliverables are agreed for each engagement but can include strategy, design systems, production assets, motion, video, templates, and structured handover materials."
          />

          <div className="creative-media__grid creative-media__grid--three">
            {creativeMediaDeliverables.map(
              (deliverable) => (
                <article
                  className="creative-media__card"
                  key={deliverable.id}
                >
                  <span className="creative-media__number">
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

      <section className="creative-media__section creative-media__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement Options"
            title="Choose a Creative Delivery Model That Fits the Work"
            description="The right structure depends on the clarity of the brief, required skills, production volume, internal ownership, urgency, and whether support is one-off or ongoing."
          />

          <div className="creative-media__grid creative-media__grid--three">
            {creativeMediaEngagementOptions.map(
              (option) => (
                <article
                  className="creative-media__card"
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

          <div className="creative-media__callout">
            <div>
              <span className="eyebrow">
                Recurring Creative Support
              </span>

              <h3>
                Need a Dedicated Creative Resource or Pod?
              </h3>

              <p>
                Designers, editors, motion specialists,
                animators, creative producers, and
                AI-assisted content professionals can
                be assigned individually or combined
                into a recurring production team.
              </p>
            </div>

            <Link
              to="/contact"
              className="creative-media__callout-link"
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

      <section className="creative-media__section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery"
            title="How We Work"
            description="Creative work begins with the communication objective and audience before concept development, production, review, and handover."
          />

          <div className="creative-media__process-grid">
            {creativeMediaProcess.map(
              (step) => (
                <article
                  className="creative-media__process-card"
                  key={step.id}
                >
                  <span className="creative-media__process-number">
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
        items={creativeMediaFaqs}
        title="Creative Media, Design & Animation FAQs"
      />

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <CTASection
        title="Turn the Brief Into a Clear Creative System"
        description="Share the audience, message, channels, timeline, and type of creative support you need. We can help define a practical production approach and engagement model."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default CreativeMediaPage;