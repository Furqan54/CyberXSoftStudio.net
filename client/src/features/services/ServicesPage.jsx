
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PageHero from "../../components/PageHero";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";

import ServiceShowcase from "./ServiceShowcase";
import ServiceCapabilities from "./ServiceCapabilities";

import { services } from "./servicesData";

import {
  engagementModels,
  startingPoints,
  overviewFaqs,
} from "./servicesOverviewData";

import "./services.css";
import "./servicesOverview.css";

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

      {/* Five service areas */}

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

      {/* Why CyberX Soft */}

      <ServiceCapabilities />

      {/* Engagement models */}

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
              delivery team. The arrangement depends
              on your goals, internal capacity, and
              delivery responsibilities.
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

          {/* Staff Augmentation highlight */}

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
                white-label delivery can support
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

          {/* Choosing an engagement model */}

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
                examples can help you identify
                where to begin.
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

      {/* Frequently asked questions */}

      <FAQSection
        items={overviewFaqs}
        title="Frequently Asked Questions"
      />

      {/* Final consultation CTA */}

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
