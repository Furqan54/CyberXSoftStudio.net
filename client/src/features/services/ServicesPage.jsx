import PageHero from "../../components/PageHero";

import ServiceShowcase from "./ServiceShowcase";
import ServiceCapabilities from "./ServiceCapabilities";

import { services } from "./servicesData";

import "./services.css";

function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Five Pillars of Enterprise Digital Excellence"
        description="An integrated set of services spanning strategy, technology, creativity, security, and talent — designed to cover your entire digital transformation journey."
        breadcrumbs={[
          {
            label: "Services",
          },
        ]}
        action={{
          label: "View Case Studies",
          path: "/case-studies",
        }}
      />

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

      <ServiceCapabilities />
    </main>
  );
}

export default ServicesPage;