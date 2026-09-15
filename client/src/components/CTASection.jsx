import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection({
  title,
  description,
  buttonLabel,
  buttonPath,
}) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <h2 className="cta-section__title">
          {title}
        </h2>

        {description && (
          <p className="cta-section__description">
            {description}
          </p>
        )}

        {buttonLabel && buttonPath && (
          <Link
            to={buttonPath}
            className="cta-section__button"
          >
            {buttonLabel}

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </section>
  );
}

export default CTASection;