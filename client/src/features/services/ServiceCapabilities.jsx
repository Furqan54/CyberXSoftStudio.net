import { serviceCapabilities } from "./servicesData";

function ServiceCapabilities() {
  return (
    <section className="service-capabilities">
      <div className="container">
        <div className="service-capabilities__header">
          <span className="eyebrow">Why CyberX Soft</span>

          <h2 className="service-capabilities__title">
            One Partner. Every Capability.
          </h2>

          <p className="service-capabilities__description">
            Rather than coordinating five different vendors, CXS gives you a
            single accountable partner across all five service pillars — with
            integrated delivery and unified leadership.
          </p>
        </div>

        <div className="service-capabilities__grid">
          {serviceCapabilities.map((capability) => (
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