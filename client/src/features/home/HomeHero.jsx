import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__overlay" />

      <div className="container home-hero__inner">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">
            HOME
          </span>

          <h1 className="home-hero__title">
            Technology and Creative Capability
            <span> Built Around Your Business</span>
          </h1>

          <p className="home-hero__description">
            CyberX Soft helps organizations design, build,
            secure, and scale digital solutions. Our teams
            bring together software, AI, data, cybersecurity,
            brand growth, creative production, and specialist
            delivery support under one accountable engagement.
          </p>

          <div className="home-hero__actions">
            <Link
              to="/services"
              className="home-hero__button"
            >
              Explore Our Services

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/contact"
              className="home-hero__button home-hero__button--secondary"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="home-hero__visual">
          {/*
            IMAGE PLACEHOLDER — HOME HERO

            Replace with the approved Home hero image.

            Recommended direction:
            A business and delivery discussion with subtle
            interface or systems context.

            Keep the left side calm enough for headline copy.
          */}
          <div className="home-hero__image-placeholder">
            <span>Home Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;