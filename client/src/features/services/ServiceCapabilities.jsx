
import {
  overviewCapabilities,
} from "./servicesOverviewData";

function ServiceCapabilities() {
  return (
    <section className="service-capabilities">
      <div className="container">
        <div className="service-capabilities__header">
          <span className="eyebrow">
            Why CyberX Soft
          </span>

          <h2 className="service-capabilities__title">
            Practical Delivery, Clear Responsibilities
          </h2>

          <p className="service-capabilities__description">
            Different projects need different skills
            and ways of working. We help bring the
            relevant capabilities together around an
            agreed scope, responsibilities, and
            delivery approach.
          </p>
        </div>

        <div className="service-capabilities__grid">
          {overviewCapabilities.map((capability) => (
            <article
              className="service-capability-card"
              key={capability.id}
            >
              <h3>{capability.title}</h3>

              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCapabilities;
