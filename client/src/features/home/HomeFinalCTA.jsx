import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./homeFinalCTA.css";

function HomeFinalCTA() {
  return (
    <section className="home-final-cta">
      <div className="container">
        <div className="home-final-cta__panel">
          {/*
            IMAGE PLACEHOLDER — HOME FINAL CTA

            The CEO brief recommends a subtle abstract visual
            showing connected paths resolving into a clear
            focal point.

            The current gradient treatment is temporary.
            Replace it with the approved decorative visual
            during the final image-production phase.
          */}

          <div className="home-final-cta__content">
            <span className="home-final-cta__eyebrow">
              Start a Conversation
            </span>

            <h2>
              Bring Us the Challenge You Need to Solve
            </h2>

            <p>
              Tell us what you are trying to improve, build, protect, or
              scale. We will help you define the right starting point and
              delivery approach.
            </p>

            <Link
              to="/contact"
              className="home-final-cta__button"
            >
              Book a Consultation

              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            className="home-final-cta__visual"
            aria-hidden="true"
          >
            <div className="home-final-cta__orb home-final-cta__orb--one" />
            <div className="home-final-cta__orb home-final-cta__orb--two" />
            <div className="home-final-cta__orb home-final-cta__orb--three" />

            <div className="home-final-cta__path" />

            <div className="home-final-cta__focus" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFinalCTA;