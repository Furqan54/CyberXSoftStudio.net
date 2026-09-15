import { useMemo, useState } from "react";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import CaseStudyCard from "./CaseStudyCard";

import {
  caseStudies,
  caseStudyCategories,
} from "./caseStudiesData";

import "./caseStudies.css";

function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "All") {
      return caseStudies;
    }

    return caseStudies.filter(
      (caseStudy) => caseStudy.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real Transformations, Measurable Results"
        description="Explore how we've helped leading enterprises across industries achieve their digital transformation goals through proven methodologies and expert delivery."
        breadcrumbs={[
          {
            label: "Case Studies",
          },
        ]}
        showImagePlaceholder
      />

      <section className="case-studies">
        <div className="container">
          <div className="case-studies__header">
            <div>
              <span className="eyebrow">
                Our Work
              </span>

              <h2 className="section-title">
                Projects Across Every Domain
              </h2>
            </div>

            <div
              className="case-studies__filters"
              aria-label="Filter case studies"
            >
              {caseStudyCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`case-studies__filter ${
                    activeCategory === category
                      ? "case-studies__filter--active"
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="case-studies__grid">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Write Your Success Story?"
        description="Let's discuss how CyberX Soft can drive measurable transformation for your organization."
        buttonLabel="Explore Our Services"
        buttonPath="/services"
      />
    </main>
  );
}

export default CaseStudiesPage;