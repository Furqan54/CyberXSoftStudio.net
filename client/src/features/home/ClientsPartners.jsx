
import { clientsPartners } from "./homeData";

import "./clientsPartners.css";

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
          {clientsPartners.map((client) => {
            const isMediabuzz =
              client.logo === "/logos/mediabuzz-global.png";

            const isTacticalTrading =
              client.logo ===
              "/logos/tactical-trading-recreated-gray.png";

            // Apply matching backgrounds to special logos.
            const logoFrameStyle = isMediabuzz
              ? {
                  background: "#202020",
                  borderColor: "rgba(255, 181, 55, 0.35)",
                }
              : isTacticalTrading
                ? {
                    background: "#656564",
                    borderColor: "#656564",
                  }
                : undefined;

            return (
              <div
                className={`clients-partners__item ${
                  isMediabuzz || isTacticalTrading
                    ? "clients-partners__item--dark-logo"
                    : ""
                }`}
                key={client.id}
              >
                <span className="clients-partners__name">
                  {client.name}
                </span>

                <div
                  className="clients-partners__logo-frame"
                  style={logoFrameStyle}
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt=""
                      className="clients-partners__logo"
                      loading="lazy"
                      decoding="async"
                      style={{
                        filter: "none",
                        mixBlendMode: "normal",
                      }}
                    />
                  ) : (
                    <span className="clients-partners__placeholder">
                      Logo coming soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ClientsPartners;
