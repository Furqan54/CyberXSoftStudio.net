import {
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";

import {
  workHero,
  workIntro,
  caseStudyStructure,
  publishedCaseStudies,
  workPublishingPrinciples,
  workCta,
} from "./workData";

import "./work.css";

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="work-page__heading">
      <span className="eyebrow">
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

function WorkPage() {
  return (
    <main className="work-page">
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow={workHero.eyebrow}
        title={workHero.title}
        description={workHero.description}
        breadcrumbs={[
          {
            label: "Work",
          },
        ]}
        action={{
          label: "Discuss a Similar Requirement",
          path: "/contact",
        }}
        visualLabel="Selected CyberX Soft Project Work Hero Image"
      />

      {/* ========================================
          EVIDENCE FIRST
      ======================================== */}

      <section className="work-page__section">
        <div className="container work-page__intro">
          <div className="work-page__intro-copy">
            <span className="eyebrow">
              {workIntro.eyebrow}
            </span>

            <h2>{workIntro.title}</h2>

            <p>
              {workIntro.description}
            </p>
          </div>

          <div className="work-page__principles">
            {workPublishingPrinciples.map(
              (principle) => (
                <div
                  className="work-page__principle"
                  key={principle}
                >
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>
                    {principle}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          SELECTED WORK
      ======================================== */}

      <section className="work-page__section work-page__section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="Project Stories Built Around Verified Evidence"
            description="Published work should make the client context, CyberX Soft responsibilities, delivered solution, and approved outcome clear without overstating the engagement."
          />

          {publishedCaseStudies.length > 0 ? (
            <div className="work-page__structure-grid">
              {publishedCaseStudies.map(
                (project) => (
                  <article
                    className="work-page__structure-card"
                    key={project.id}
                  >
                    <span className="eyebrow">
                      {project.context}
                    </span>

                    <h3>
                      {project.name}
                    </h3>

                    {project.summary && (
                      <p>
                        {project.summary}
                      </p>
                    )}
                  </article>
                )
              )}
            </div>
          ) : (
            <div className="work-page__empty-state">
              <div className="work-page__empty-icon">
                <FileCheck2
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <h3>
                Approved Project Stories Are Being Prepared
              </h3>

              <p>
                Selected engagements will be
                published here once project scope,
                client approval, supporting
                evidence, and any publishable
                outcomes have been confirmed.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================
          CASE STUDY STRUCTURE
      ======================================== */}

      <section className="work-page__section">
        <div className="container">
          <SectionHeading
            eyebrow="Case Study Approach"
            title="What Every Published Project Story Should Explain"
            description="Each case study should help the reader understand the operating context, challenge, CyberX Soft role, delivery approach, solution, and evidence-backed result."
          />

          <div className="work-page__structure-grid">
            {caseStudyStructure.map(
              (item) => (
                <article
                  className="work-page__structure-card"
                  key={item.id}
                >
                  <span className="work-page__number">
                    {String(item.id).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>{item.title}</h3>

                  <p>
                    {item.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          PUBLICATION STANDARD
      ======================================== */}

      <section className="work-page__section work-page__section--dark">
        <div className="container work-page__dark-layout">
          <div className="work-page__dark-copy">
            <span className="eyebrow">
              Publication Standard
            </span>

            <h2>
              Show Evidence Rather Than Generic Claims
            </h2>

            <p>
              Project material should be accurate,
              approved, relevant to the engagement,
              and presented without exposing
              confidential information.
            </p>
          </div>

          <div className="work-page__dark-list">
            {workPublishingPrinciples.map(
              (principle) => (
                <div
                  className="work-page__dark-item"
                  key={`dark-${principle}`}
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>
                    {principle}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}

      <CTASection
        title={workCta.title}
        description={workCta.description}
        buttonLabel={workCta.buttonLabel}
        buttonPath={workCta.buttonPath}
      />
    </main>
  );
}

export default WorkPage;