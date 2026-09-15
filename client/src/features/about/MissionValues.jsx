import {
  Eye,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import {
  companyValues,
  foundationPillars,
} from "./aboutData";

const pillarIcons = {
  Mission: Target,
  Vision: Eye,
  Purpose: Lightbulb,
};

const valueIcons = {
  "Client-First": Users,
  Transparency: Workflow,
  Excellence: ShieldCheck,
  Innovation: Sparkles,
};

function MissionValues() {
  return (
    <section className="mission-values">
      <div className="container">
        <div className="mission-values__header">
          <span className="eyebrow">
            Our Foundation
          </span>

          <h2 className="mission-values__title">
            Mission, Vision & Values
          </h2>
        </div>

        <div className="mission-values__pillars">
          {foundationPillars.map((pillar) => {
            const Icon = pillarIcons[pillar.title];

            return (
              <article
                className="foundation-card"
                key={pillar.id}
              >
                <div className="foundation-card__icon">
                  {Icon && (
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3>{pillar.title}</h3>

                <p>{pillar.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mission-values__values">
          {companyValues.map((value) => {
            const Icon = valueIcons[value.title];

            return (
              <article
                className="value-card"
                key={value.id}
              >
                <div className="value-card__icon">
                  {Icon && (
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionValues;