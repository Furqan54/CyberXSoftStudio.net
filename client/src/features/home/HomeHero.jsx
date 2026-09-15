import { ArrowRight, CheckCircle2 } from "lucide-react";

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
            CyberX Soft delivers technology, digital transformation, software,
            cybersecurity, creative, and talent solutions that drive measurable
            business outcomes for enterprises worldwide.
          </p>

          <a href="/services" className="home-hero__button">
            Explore Our Services
            <ArrowRight size={17} />
          </a>

          <div className="home-hero__stats">
            <div className="home-hero__stat">
              <strong>150+</strong>
              <span>Projects Delivered</span>
            </div>

            <div className="home-hero__stat">
              <strong>50+</strong>
              <span>Enterprise Clients</span>
            </div>

            <div className="home-hero__stat">
              <strong>30+</strong>
              <span>Countries</span>
            </div>
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__image-placeholder">
            <span>Hero image</span>
          </div>

          <div className="home-hero__delivery-card">
            <div className="home-hero__delivery-icon">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <strong>Project Delivered</strong>
              <span>On time, on budget</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;