import { ArrowRight } from "lucide-react";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__overlay" />

      <div className="container home-hero__inner">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">HOME</span>

          <h1 className="home-hero__title">
            Transforming Ideas Into
            <span> Digital Solutions</span>
          </h1>

          <p className="home-hero__description">
            CyberX Soft helps organizations design, build,
            secure, and scale digital solutions through
            practical technology and creative execution.
          </p>

          <a href="/services" className="home-hero__button">
            Explore Our Services
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="home-hero__visual">
          {/*
            IMAGE PLACEHOLDER
            Replace with the approved Home hero image
            during Block 02 implementation.
          */}
          <div className="home-hero__image-placeholder">
            <span>Hero image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;