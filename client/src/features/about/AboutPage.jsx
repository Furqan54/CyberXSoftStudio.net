
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "../../components/PageHero";

import MissionValues from "./MissionValues";
import ProcessSection from "./ProcessSection";

import { companyOverview } from "./aboutData";

import "./about.css";

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About CyberX Soft"
        title="A Practical Partner for Digital Growth and Delivery"
        description="CyberX Soft brings technology, cybersecurity, data, creative, marketing, and delivery capability into one coordinated team. We work with organizations that need to build, improve, protect, or scale digital operations without adding unnecessary complexity."
        breadcrumbs={[
          {
            label: "About",
          },
        ]}
        action={{
          label: "Explore Our Work",
          path: "/case-studies",
        }}
        showImagePlaceholder
      />

      <section className="about-overview">
        <div className="container about-overview__layout">
          <div className="about-overview__visual">
            {/*
              IMAGE PLACEHOLDER — COMPANY OVERVIEW

              Replace with an authentic CyberX Soft office,
              workshop, or team collaboration photograph.

              Recommended aspect ratio: 3:2.
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

      <ProcessSection />
    </main>
  );
}

export default AboutPage;
