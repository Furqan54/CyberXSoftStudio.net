import { useMemo, useState } from "react";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import InsightCard from "./InsightCard";

import {
  insightCategories,
  insights,
} from "./insightsData";

import "./insights.css";

function InsightsPage() {
  const allCategory = "All Insights";

  const categories = [
    allCategory,
    ...insightCategories,
  ];

  const [activeCategory, setActiveCategory] =
    useState(allCategory);

  const filteredInsights = useMemo(() => {
    if (activeCategory === allCategory) {
      return insights;
    }

    return insights.filter(
      (insight) =>
        insight.type === activeCategory
    );
  }, [activeCategory]);

  const categoryDescriptions = {
    "All Insights":
      "Explore practical perspectives across AI, software, cybersecurity, data, creative work, digital growth, and delivery.",

    "AI & Automation":
      "Use cases, readiness, data, governance, integration, risk, and adoption.",

    "Software & Platforms":
      "Product decisions, architecture, integration, modernization, quality, and maintainability.",

    "Cybersecurity & Governance":
      "Risk priorities, identity, cloud, resilience, compliance, and management accountability.",

    "Data & Business Intelligence":
      "Data foundations, reporting quality, dashboards, decision support, and responsible use.",

    "Brand Growth & Creative":
      "Positioning, campaign planning, content systems, design, animation, and performance.",

    "Delivery & Talent":
      "Team models, project controls, quality assurance, augmentation, and knowledge transfer.",
  };

  return (
    <main>
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="Insights"
        title="Practical Thinking for Digital Decisions"
        description="Explore clear, experience-led perspectives on technology, security, data, creative work, digital growth, and delivery. Our aim is to help leaders understand the decision, the trade-offs, and the next practical step."
        breadcrumbs={[
          {
            label: "Insights",
          },
        ]}
        splitVisual
        visualLabel="Insights Editorial Hero Image"
      />

      {/* ========================================
          INSIGHT CATEGORIES
      ======================================== */}

      <section className="insights-section">
        <div className="container">
          <div
            className="insights-tabs"
            role="tablist"
            aria-label="Insight categories"
          >
            {categories.map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={
                    activeCategory === category
                  }
                  className={`insights-tabs__button ${
                    activeCategory === category
                      ? "insights-tabs__button--active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* ====================================
              ACTIVE CATEGORY
          ==================================== */}

          <div className="insights-section__header">
            <span className="eyebrow">
              Editorial Focus
            </span>

            <h2 className="section-title">
              {activeCategory}
            </h2>

            <p className="insights-section__description">
              {
                categoryDescriptions[
                  activeCategory
                ]
              }
            </p>
          </div>

          {/* ====================================
              ARTICLE CARDS
          ==================================== */}

          <div className="insights-grid">
            {filteredInsights.map(
              (insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <CTASection
        title="Expert Guidance for a Live Requirement"
        description="If an insight reflects a challenge inside your organization, speak with our team about the context, constraints, and next practical step."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default InsightsPage;