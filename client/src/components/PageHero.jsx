import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  action = null,
  showImagePlaceholder = false,
  splitVisual = false,
  visualLabel = "Page Hero Image",
}) {
  return (
    <section
      className={`page-hero ${
        showImagePlaceholder ? "page-hero--with-image" : ""
      } ${splitVisual ? "page-hero--split" : ""}`}
    >
      {/*
        IMAGE PLACEHOLDER
        Full-background hero image placeholder.
        Replace with the final page hero image later.
      */}
      {showImagePlaceholder && !splitVisual && (
        <div
          className="page-hero__image-placeholder"
          aria-hidden="true"
        />
      )}

      <div className="page-hero__overlay" />

      <div className="container page-hero__inner">
        <nav
          className="page-hero__breadcrumbs"
          aria-label="Breadcrumb"
        >
          <Link to="/" aria-label="Home">
            <Home size={13} strokeWidth={1.8} />
          </Link>

          {breadcrumbs.map((item) => (
            <div
              className="page-hero__breadcrumb-item"
              key={item.label}
            >
              <ChevronRight
                size={13}
                strokeWidth={1.6}
                aria-hidden="true"
              />

              {item.path ? (
                <Link to={item.path}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="page-hero__layout">
          <div className="page-hero__content">
            {eyebrow && (
              <span className="page-hero__eyebrow">
                {eyebrow}
              </span>
            )}

            <h1 className="page-hero__title">
              {title}
            </h1>

            {description && (
              <p className="page-hero__description">
                {description}
              </p>
            )}

            {action && (
              <Link
                to={action.path}
                className="page-hero__action"
              >
                {action.label}
              </Link>
            )}
          </div>

          {splitVisual && (
            <div className="page-hero__split-visual">
              {/*
                IMAGE PLACEHOLDER
                Replace this block with the final right-side hero image later.
              */}
              <div className="page-hero__split-placeholder">
                <span>{visualLabel}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;