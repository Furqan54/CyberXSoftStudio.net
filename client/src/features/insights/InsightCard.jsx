function InsightCard({ insight }) {
  return (
    <article className="insight-card">
      {/*
        IMAGE PLACEHOLDER
        Replace this block with the final insight/article image later.
      */}
      <div className="insight-card__image-placeholder">
        <span>Insight Image</span>
      </div>

      <div className="insight-card__content">
        <span className="insight-card__category">
          {insight.category}
        </span>

        <h2 className="insight-card__title">
          {insight.title}
        </h2>

        <p className="insight-card__excerpt">
          {insight.excerpt}
        </p>

        <div className="insight-card__meta">
          <span>{insight.date}</span>
          <span aria-hidden="true">•</span>
          <span>{insight.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default InsightCard;