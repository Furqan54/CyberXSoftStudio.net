
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import {
  serviceOverviewBySlug,
} from "./servicesOverviewData";

function ServiceShowcase({
  service,
  reverse = false,
}) {
  const overview =
    serviceOverviewBySlug[service.slug] || {};

  // servicesData.js stores an actual Lucide component,
  // not an icon-name string.
  const Icon = service.icon;

  const name = overview.name || service.name;

  const title =
    overview.showcaseTitle ||
    service.showcaseTitle;

  const description =
    overview.showcaseDescription ||
    service.showcaseDescription;

  const features =
    overview.features || service.features;

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

          <span>{name}</span>
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

          <h2>{title}</h2>
        </div>

        <p className="service-showcase__description">
          {description}
        </p>

        <ul className="service-showcase__features">
          {features.map((feature) => (
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
          aria-label={`Explore ${name}`}
        >
          Explore this service

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="service-showcase__visual">
        {/*
          IMAGE PLACEHOLDER — SERVICE OVERVIEW

          Replace with the approved service image.
          Recommended format: 4:3 landscape.

          Images should show people, products, or
          technology in the context of actual work.
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
