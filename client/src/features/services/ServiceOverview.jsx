import {
  ArrowRight,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";

function ServiceOverview({ service }) {
  const {
    overviewTitle,
    overviewDescription,
    overviewSecondaryDescription,
    overviewPoints = [],
    coreServices = [],
    capabilities = [],
  } = service.detail;

  return (
    <>
      <section className="service-detail-overview">
        <div className="container service-detail-overview__layout">
          <div className="service-detail-overview__content">
            <span className="eyebrow">
              Service Overview
            </span>

            <h2 className="section-title">
              {overviewTitle}
            </h2>

            <p className="service-detail-overview__description">
              {overviewDescription}
            </p>

            {overviewSecondaryDescription && (
              <p className="service-detail-overview__description">
                {overviewSecondaryDescription}
              </p>
            )}

            <Link
              to="/contact"
              className="service-detail-overview__button"
            >
              Discuss Your Requirements

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="service-detail-overview__points">
            {overviewPoints.map((point, index) => (
              <article
                className="service-detail-point"
                key={`${point}-${index}`}
              >
                <div className="service-detail-point__icon">
                  <Check
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-core">
        <div className="container">
          <div className="service-detail-section-header">
            <span className="eyebrow">
              Core Services
            </span>

            <h2 className="section-title">
              What We Deliver
            </h2>

            <p className="section-description">
              End-to-end expertise designed to solve complex business
              challenges and deliver measurable outcomes.
            </p>
          </div>

          <div className="service-detail-core__grid">
            {coreServices.map((item, index) => (
              <article
                className="service-detail-core-card"
                key={item.id ?? item.title}
              >
                <span className="service-detail-core-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-capabilities">
        <div className="container service-detail-capabilities__layout">
          <div className="service-detail-capabilities__intro">
            <span className="eyebrow">
              Services Included
            </span>

            <h2 className="service-detail-capabilities__title">
              The Full Scope of Our Capabilities
            </h2>

            <p>
              Our specialists combine strategy, technology, execution,
              and continuous optimization to support your organization
              from planning through long-term growth.
            </p>
          </div>

          <div className="service-detail-capabilities__grid">
            {capabilities.map((item) => (
              <article
                className="service-detail-capability"
                key={item.id ?? item.title}
              >
                <div className="service-detail-capability__icon">
                  <Check
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>{item.title}</h3>

                  {item.description && (
                    <p>{item.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceOverview;