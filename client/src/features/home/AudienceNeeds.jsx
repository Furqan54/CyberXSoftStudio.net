import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { audienceNeeds } from "./homeData";

function AudienceNeeds() {
  return (
    <section className="why-choose-us audience-needs">
      <div className="container">
        <div className="why-choose-us__header">
          <span className="eyebrow">
            Where to Start
          </span>

          <h2 className="section-title">
            Support for the Moments When Capacity and Capability Matter Most
          </h2>

          <p className="why-choose-us__description">
            CyberX Soft is suited to organizations facing a delivery deadline,
            a specialist skills gap, an underperforming digital channel, a
            security or data requirement, or a product opportunity that cannot
            wait for a long internal hiring cycle.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {audienceNeeds.map((item) => (
            <article
              className="why-choose-card"
              key={item.id}
            >
              <div className="why-choose-card__icon">
                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              <div className="why-choose-card__content">
                <h3>
                  {item.need}
                </h3>

                <p>
                  {item.service}
                </p>

                <Link
                  to={item.path}
                  className="home-service-card__link"
                >
                  Explore this service

                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceNeeds;