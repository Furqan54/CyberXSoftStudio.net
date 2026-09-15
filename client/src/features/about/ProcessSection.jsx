import { deliveryProcess } from "./aboutData";

function ProcessSection() {
  return (
    <section className="delivery-process">
      <div className="container">
        <div className="delivery-process__header">
          <span className="eyebrow">
            Our Process
          </span>

          <h2 className="delivery-process__title">
            How We Deliver Results
          </h2>

          <p className="delivery-process__description">
            A proven 5-step engagement model that ensures every project delivers
            measurable value.
          </p>
        </div>

        <div className="delivery-process__timeline">
          {deliveryProcess.map((step) => (
            <article
              className="delivery-process__step"
              key={step.id}
            >
              <div className="delivery-process__number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;