import {
  ChevronRight,
  Home,
} from "lucide-react";

import { Link } from "react-router-dom";

import NotFoundPage from "../../app/NotFoundPage";

import { getLegalPage } from "./legalData";

import "./legal.css";

function LegalPage({ legalSlug }) {
  const page = getLegalPage(legalSlug);

  if (!page) {
    return <NotFoundPage />;
  }

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <nav
            className="legal-hero__breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              aria-label="Home"
            >
              <Home
                size={11}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            <ChevronRight
              size={11}
              strokeWidth={1.6}
              aria-hidden="true"
            />

            <span>{page.title}</span>
          </nav>

          <div className="legal-hero__content">
            <span className="legal-hero__eyebrow">
              {page.eyebrow}
            </span>

            <h1>{page.title}</h1>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content__inner">
          <p className="legal-content__updated">
            Last updated: {page.updated}
          </p>

          <div className="legal-content__sections">
            {page.sections.map((section, sectionIndex) => (
              <article
                className="legal-section"
                key={section.title}
              >
                <h2>
                  {sectionIndex + 1}. {section.title}
                </h2>

                {section.paragraphs?.map(
                  (paragraph, paragraphIndex) => (
                    <p
                      key={`${section.title}-paragraph-${paragraphIndex}`}
                    >
                      {paragraph}
                    </p>
                  )
                )}

                {section.bullets?.length > 0 && (
                  <ul className="legal-section__list">
                    {section.bullets.map(
                      (bullet, bulletIndex) => (
                        <li
                          key={`${section.title}-bullet-${bulletIndex}`}
                        >
                          {bullet.label && (
                            <strong>
                              {bullet.label}:
                            </strong>
                          )}

                          {bullet.label && " "}

                          {bullet.text}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LegalPage;