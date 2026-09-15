import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQSection({
  items = [],
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
}) {
  const [openItemId, setOpenItemId] = useState(items[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenItemId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-section__header">
          <span className="eyebrow">{eyebrow}</span>

          <h2 className="section-title">{title}</h2>
        </div>

        <div className="faq-section__list">
          {items.map((item) => {
            const isOpen = openItemId === item.id;
            const answerId = `faq-answer-${item.id}`;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                key={item.id}
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="faq-item__icon"
                  />
                </button>

                <div
                  id={answerId}
                  className="faq-item__answer-wrapper"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-item__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;