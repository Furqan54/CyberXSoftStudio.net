function InsightCard({ insight }) {
  const isComingSoon =
    insight.date === "Coming soon";

  return (
    <article className="insight-card">
      {/**
       * IMAGE PLACEHOLDER
       * Replace this block with the final
       * editorial article image later.
       */}
      <div className="insight-card__image-placeholder">
        <span>Insight Image</span>
      </div>

      <div className="insight-card__content">
        <span className="insight-card__category">
          {insight.category}
        </span>

        <h3 className="insight-card__title">
          {insight.title}
        </h3>

        <p className="insight-card__excerpt">
          {insight.excerpt}
        </p>

        <div className="insight-card__meta">
          {isComingSoon ? (
            <>
              <span>Coming soon</span>

              <span aria-hidden="true">
                •
              </span>

              <span>
                {insight.readTime}
              </span>
            </>
          ) : (
            <>
              <span>
                {insight.date}
              </span>

              <span aria-hidden="true">
                •
              </span>

              <span>
                {insight.readTime}
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default InsightCard;