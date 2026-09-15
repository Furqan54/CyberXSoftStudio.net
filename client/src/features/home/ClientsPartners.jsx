import { clientsPartners } from "./homeData";

function ClientsPartners() {
  return (
    <section
      className="clients-partners"
      aria-labelledby="clients-partners-title"
    >
      <div className="container">
        <h2
          id="clients-partners-title"
          className="clients-partners__title"
        >
          Our Clients and Partners
        </h2>

        <div className="clients-partners__grid">
          {clientsPartners.map((client) => (
            <div
              className="clients-partners__item"
              key={client.id}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="clients-partners__logo"
                  loading="lazy"
                />
              ) : (
                <span className="clients-partners__placeholder">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsPartners;