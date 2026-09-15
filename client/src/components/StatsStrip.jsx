function StatsStrip({ items = [] }) {
  return (
    <section className="stats-strip" aria-label="Company performance statistics">
      <div className="container stats-strip__grid">
        {items.map((item) => (
          <article className="stats-strip__item" key={item.id}>
            <strong className="stats-strip__value">{item.value}</strong>

            <span className="stats-strip__label">{item.label}</span>

            {item.note && (
              <span className="stats-strip__note">{item.note}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsStrip;