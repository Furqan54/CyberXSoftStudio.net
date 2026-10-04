import { CheckCircle2 } from "lucide-react";

import { whyChooseUsItems } from "./homeData";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-us__header">
          <span className="eyebrow">
            Why Choose CyberX Soft
          </span>

          <h2 className="section-title">
            One Team From Strategy Through Delivery
          </h2>

          <p className="why-choose-us__description">
            Complex initiatives often stall between strategy, creative
            execution, engineering, security, and operational handover.
            CyberX Soft coordinates these disciplines through a single
            delivery model, giving clients clearer ownership and fewer
            handoffs.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {whyChooseUsItems.map((item) => (
            <article
              className="why-choose-card"
              key={item.id}
            >
              <div className="why-choose-card__icon">
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              <div className="why-choose-card__content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;