import {
  ArrowRight,
  CheckCircle2,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import { staffAugmentationHighlights } from "./homeData";

import "./staffAugmentationHighlight.css";

function StaffAugmentationHighlight() {
  return (
    <section className="staff-highlight">
      <div className="container staff-highlight__inner">
        <div className="staff-highlight__content">
          <span className="staff-highlight__eyebrow">
            Staff Augmentation
          </span>

          <h2 className="staff-highlight__title">
            Extend Your Team Without Waiting for Permanent Recruitment
          </h2>

          <p className="staff-highlight__description">
            When a roadmap is moving faster than recruitment, CyberX Soft can
            provide one specialist, a dedicated remote team, a managed
            multidisciplinary pod, or a confidential white-label delivery
            team. Clients retain day-to-day control in a conventional
            augmentation model, while managed pods include greater CyberX Soft
            coordination, reporting, and quality oversight.
          </p>

          <div className="staff-highlight__actions">
            <Link
              to="/contact"
              className="staff-highlight__button staff-highlight__button--primary"
            >
              Request Talent Profiles

              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/services/talent-augmentation-delivery-support"
              className="staff-highlight__button staff-highlight__button--secondary"
            >
              Explore Staff Augmentation
            </Link>
          </div>
        </div>

        <div className="staff-highlight__panel">
          <div className="staff-highlight__panel-heading">
            <div className="staff-highlight__panel-icon">
              <UsersRound
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <div>
              <span>Flexible delivery capacity</span>

              <strong>
                Shape the team around the requirement
              </strong>
            </div>
          </div>

          <div className="staff-highlight__list">
            {staffAugmentationHighlights.map((item) => (
              <div
                className="staff-highlight__item"
                key={item.id}
              >
                <CheckCircle2
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StaffAugmentationHighlight;