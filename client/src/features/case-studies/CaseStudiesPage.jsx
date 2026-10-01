
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

  const hasApprovedCaseStudies = caseStudies.length > 0;

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
        eyebrow="Work"
        title="Selected Work Shaped Around Real Operating Needs"
        description="Our work spans digital platforms, brand development, content ecosystems, business systems, cybersecurity, software, and specialist delivery. Each published case study should explain the problem, scope, approach, deliverables, and verified outcome."
        breadcrumbs={[
          {
            label: "Work",
          },
        ]}
        action={{
          label: "Discuss a Similar Requirement",
          path: "/contact",
        }}
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
                Selected Client Engagements
              </h2>
            </div>

            {hasApprovedCaseStudies && (
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
                    aria-pressed={
                      activeCategory === category
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {hasApprovedCaseStudies ? (
            <div className="case-studies__grid">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                />
              ))}
            </div>
          ) : (
            <div className="case-study-card">
              <div className="case-study-card__content">
                <span className="eyebrow">
                  Project Highlights
                </span>

                <h3 className="case-study-card__title">
                  Detailed Project Stories Are Being Prepared
                </h3>

                <p className="case-study-card__description">
                  We are reviewing project details,
                  supporting materials, and client
                  permissions before publishing individual
                  case studies. Each published example will
                  describe the actual requirements, our
                  involvement, the work delivered, and any
                  approved outcomes.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Discuss Your Next Project"
        description="Tell us what you need to build, improve, secure, or scale. We can discuss your requirements and the most suitable next steps."
        buttonLabel="Book a Consultation"
        buttonPath="/contact"
      />
    </main>
  );
}

export default CaseStudiesPage;
