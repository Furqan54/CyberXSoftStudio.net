import { CheckCircle2 } from "lucide-react";

function CaseStudyCard({ caseStudy }) {
  return (
    <article className="case-study-card">
      <div className="case-study-card__visual">
        {/*
          IMAGE PLACEHOLDER
          Replace this block with the final case study image later.
        */}
        <div className="case-study-card__image-placeholder">
          <span>Case Study Image</span>
        </div>

        <span className="case-study-card__category">
          {caseStudy.category}
        </span>
      </div>

      <div className="case-study-card__content">
        <span className="case-study-card__industry">
          {caseStudy.industry}
        </span>

        <h2 className="case-study-card__title">
          {caseStudy.title}
        </h2>

        <p className="case-study-card__description">
          {caseStudy.description}
        </p>

        <div className="case-study-card__technologies">
          {caseStudy.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="case-study-card__result">
          <CheckCircle2
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>{caseStudy.result}</span>
        </div>
      </div>
    </article>
  );
}

export default CaseStudyCard;