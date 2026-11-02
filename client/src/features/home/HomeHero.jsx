
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import MediaImage from "../../components/MediaImage";
import { pageMedia } from "../../config/media";

import "../../styles/heroButtons.css";

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
          <div className="home-hero__image">
            <MediaImage
              name={pageMedia.home.name}
              position={pageMedia.home.position}
              sizes="(max-width: 900px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
