import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Palette,
  Shield,
  Star,
  Users,
} from "lucide-react";

import { services } from "../services/servicesData";

const serviceIcons = {
  palette: Palette,
  star: Star,
  code: BrainCircuit,
  shield: Shield,
  users: Users,
};

function HomeServices() {
  return (
    <section className="home-services">
      <div className="container">
        <div className="home-services__header">
          <div className="home-services__heading">
            <span className="eyebrow">Our Services</span>

            <h2 className="section-title">
              Complete Digital Solutions for the Modern Enterprise
            </h2>

            <p className="section-description">
              Five integrated service pillars designed to cover every aspect of
              your digital transformation journey.
            </p>
          </div>

          <NavLink to="/services" className="home-services__view-all">
            View All Services
            <ArrowRight size={16} aria-hidden="true" />
          </NavLink>
        </div>

        <div className="home-services__grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article className="home-service-card" key={service.id}>
                <div className="home-service-card__icon">
                  {Icon && <Icon size={20} strokeWidth={1.8} />}
                </div>

                <h3 className="home-service-card__title">
                  {service.homeTitle}
                </h3>

                <p className="home-service-card__description">
                  {service.homeDescription}
                </p>

                <NavLink
                  to={`/services/${service.slug}`}
                  className="home-service-card__link"
                >
                  Learn More
                  <ArrowRight size={14} aria-hidden="true" />
                </NavLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeServices;