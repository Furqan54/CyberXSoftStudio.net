import {
  ArrowRight,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./homeProof.css";

function HomeProof() {
  return (
    <section className="home-proof">
      <div className="container">
        <div className="home-proof__header">
          <span className="eyebrow">
            Selected Work
          </span>

          <h2 className="section-title">
            Show Evidence Rather Than Generic Statistics
          </h2>

          <p className="home-proof__description">
            CyberX Soft publishes project stories only when the engagement
            context, scope, deliverables, client relationship, and outcomes can
            be described accurately and responsibly.
          </p>
        </div>

        <div className="home-proof__panel">
          <div className="home-proof__visual">
            <div className="home-proof__icon">
              <FileCheck2
                size={28}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </div>

            <span>
              Evidence-first project publishing
            </span>
          </div>

          <div className="home-proof__content">
            <span className="home-proof__status">
              Approved project stories are being prepared
            </span>

            <h3>
              Work should demonstrate what was actually delivered.
            </h3>

            <p>
              Each published case study will explain the operating context,
              challenge, scope, delivery approach, key deliverables, and
              verified outcome rather than relying on unsupported project
              counts, percentages, or generic performance claims.
            </p>

            <div className="home-proof__assurance">
              <ShieldCheck
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>
                Client names, statistics, screenshots, and outcomes will only
                be published after the required approval and verification.
              </span>
            </div>

            <div className="home-proof__actions">
              <Link
                to="/case-studies"
                className="home-proof__button home-proof__button--primary"
              >
                Explore Our Work

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/contact"
                className="home-proof__button home-proof__button--secondary"
              >
                Discuss a Similar Requirement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProof;