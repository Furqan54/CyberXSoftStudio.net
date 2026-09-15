import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../../components/PageHero";

import MissionValues from "./MissionValues";

import {
  aboutStats,
  companyOverview,
} from "./aboutData";

import "./about.css";

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About CyberX Soft"
        title="The Technology Partner Built for Enterprise Success"
        description="Founded with a mission to make enterprise-grade digital transformation accessible, CyberX Soft has grown into a full-spectrum technology partner trusted by leading organizations across 30+ countries."
        breadcrumbs={[
          {
            label: "About",
          },
        ]}
        action={{
          label: "View Case Studies",
          path: "/case-studies",
        }}
        showImagePlaceholder
      />

      <section
        className="about-stats"
        aria-label="CyberX Soft company statistics"
      >
        <div className="container about-stats__grid">
          {aboutStats.map((stat) => (
            <article
              className="about-stats__item"
              key={stat.id}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-overview">
        <div className="container about-overview__layout">
          <div className="about-overview__visual">
            {/*
              IMAGE PLACEHOLDER
              Replace this block with the final company overview image later.
            */}
            <div className="about-overview__image-placeholder">
              <span>Company Overview Image</span>
            </div>
          </div>

          <div className="about-overview__content">
            <span className="eyebrow">
              {companyOverview.eyebrow}
            </span>

            <h2 className="section-title">
              {companyOverview.title}
            </h2>

            <p className="about-overview__description">
              {companyOverview.description}
            </p>

            <p className="about-overview__description">
              {companyOverview.secondaryDescription}
            </p>

            <Link
              to={companyOverview.actionPath}
              className="about-overview__button"
            >
              {companyOverview.actionLabel}

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <MissionValues />
    </main>
  );
}

export default AboutPage;