
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/heroButtons.css";

function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  action = null,

  // Keep support for a future full-background
  // hero image if needed.
  showImagePlaceholder = false,

  // Standard page hero uses a split layout.
  splitVisual = true,

  // Can be customized per page.
  visualLabel = null,
}) {
  const resolvedVisualLabel =
    visualLabel ||
    `${eyebrow || "Page"} Hero Image`;

  return (
    <section
      className={`page-hero ${
        showImagePlaceholder
          ? "page-hero--with-image"
          : ""
      } ${
        splitVisual
          ? "page-hero--split"
          : ""
      }`}
    >
      {/*
        IMAGE PLACEHOLDER — FULL BACKGROUND

        Displayed when:
        showImagePlaceholder = true
        AND splitVisual = false
      */}
      {showImagePlaceholder && !splitVisual && (
        <div
          className="page-hero__image-placeholder"
          aria-hidden="true"
        />
      )}

      <div className="page-hero__overlay" />

      <div className="container page-hero__inner">
        {/* BREADCRUMBS */}

        <nav
          className="page-hero__breadcrumbs"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            aria-label="Home"
          >
            <Home
              size={13}
              strokeWidth={1.8}
              aria-hidden="true"
            />
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

        {/* HERO LAYOUT */}

        <div className="page-hero__layout">
          {/* HERO CONTENT */}

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
                <span>{action.label}</span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>

          {/* HERO IMAGE AREA */}

          {/*
            IMAGE PLACEHOLDER —
            PAGE-SPECIFIC HERO IMAGE

            Replace with an approved image.

            Recommended:
            - 16:9 or 4:3
            - authentic project/team imagery
            - meaningful alt text when replaced
          */}

          {splitVisual && (
            <div className="page-hero__split-visual">
              <div className="page-hero__split-placeholder">
                <span>
                  {resolvedVisualLabel}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
