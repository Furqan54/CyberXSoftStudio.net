import { Star } from "lucide-react";

import { testimonials } from "./homeData";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="eyebrow">Testimonials</span>

          <h2 className="testimonials__title">
            What Our Clients Say
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <div
                className="testimonial-card__rating"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    strokeWidth={1.8}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="testimonial-card__quote">
                “{testimonial.quote}”
              </blockquote>

              <div className="testimonial-card__footer">
                <div
                  className="testimonial-card__avatar"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>

                <div className="testimonial-card__person">
                  <strong>{testimonial.name}</strong>

                  <span>
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;