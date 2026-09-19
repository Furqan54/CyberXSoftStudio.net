import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Palette,
  Shield,
  Star,
  Users,
} from "lucide-react";

const serviceIcons = {
  palette: Palette,
  star: Star,
  code: BrainCircuit,
  shield: Shield,
  users: Users,
};

function ServiceShowcase({ service, reverse = false }) {
  const Icon = serviceIcons[service.icon];

  return (
    <article
      className={`service-showcase ${
        reverse ? "service-showcase--reverse" : ""
      }`}
    >
      <div className="service-showcase__content">
        <div className="service-showcase__eyebrow">
          <span className="service-showcase__number">
            {service.number}
          </span>

          <span>{service.name}</span>
        </div>

        <div className="service-showcase__heading">
          <div className="service-showcase__icon">
            {Icon && (
              <Icon
                size={21}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            )}
          </div>

          <h2>{service.showcaseTitle}</h2>
        </div>

        <p className="service-showcase__description">
          {service.showcaseDescription}
        </p>

        <ul className="service-showcase__features">
          {service.features.map((feature) => (
            <li key={feature}>
              <span className="service-showcase__check">
                <Check
                  size={12}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.slug}`}
          className="service-showcase__button"
        >
          Learn More

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="service-showcase__visual">
        {/*
          IMAGE PLACEHOLDER
          Replace this block with the final service image later.
        */}
        <div className="service-showcase__image-placeholder">
          <span>Service Image Placeholder</span>
        </div>

        <span className="service-showcase__image-number">
          {service.number}
        </span>
      </div>
    </article>
  );
}

export default ServiceShowcase;