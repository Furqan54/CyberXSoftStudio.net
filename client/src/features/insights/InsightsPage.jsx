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
  const [activeCategory, setActiveCategory] = useState("Blog");

  const filteredInsights = useMemo(
    () =>
      insights.filter(
        (insight) => insight.type === activeCategory
      ),
    [activeCategory]
  );

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Thought Leadership from the Front Lines of Digital Transformation"
        description="Research, analysis, and practical guidance from CXS experts — covering AI, cybersecurity, cloud, ERP, and digital strategy."
        breadcrumbs={[
          {
            label: "Insights",
          },
        ]}
        splitVisual
        visualLabel="Insights Hero Image"
      />

      <section className="insights-section">
        <div className="container">
          <div
            className="insights-tabs"
            role="tablist"
            aria-label="Insight categories"
          >
            {insightCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`insights-tabs__button ${
                  activeCategory === category
                    ? "insights-tabs__button--active"
                    : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="insights-section__header">
            <span className="eyebrow">
              {activeCategory}
            </span>

            <h2 className="section-title">
              {activeCategory === "Blog"
                ? "Latest Articles"
                : activeCategory}
            </h2>
          </div>

          <div className="insights-grid">
            {filteredInsights.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Expert Guidance for Your Organization?"
        description="Our consultants can translate our research directly into an action plan for your business."
        buttonLabel="Explore Our Services"
        buttonPath="/services"
      />
    </main>
  );
}

export default InsightsPage;