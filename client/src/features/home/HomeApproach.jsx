import { ArrowDownRight } from "lucide-react";

import { homeApproachSteps } from "./homeData";

import "./homeApproach.css";

function HomeApproach() {
  return (
    <section className="home-approach">
      <div className="container">
        <div className="home-approach__header">
          <span className="eyebrow">
            Our Approach
          </span>

          <h2 className="section-title">
            A Practical Path From Requirement to Result
          </h2>

          <p className="home-approach__description">
            We move from business context and scope definition through visible
            delivery, deployment, handover, and continuous improvement.
          </p>
        </div>

        <div className="home-approach__grid">
          {homeApproachSteps.map((step) => (
            <article
              className="home-approach__card"
              key={step.id}
            >
              <div className="home-approach__number">
                {step.number}
              </div>

              <div className="home-approach__card-content">
                <div className="home-approach__title-row">
                  <h3>
                    {step.title}
                  </h3>

                  <ArrowDownRight
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <p>
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeApproach;