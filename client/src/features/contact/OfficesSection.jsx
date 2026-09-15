import {
  Building2,
  MapPin,
  Phone,
} from "lucide-react";

import { offices } from "./contactData";

function OfficesSection() {
  return (
    <section className="offices-section">
      <div className="container">
        <div className="offices-section__header">
          <h2>Our Offices</h2>
        </div>

        <div className="offices-section__grid">
          {offices.map((office) => (
            <article
              className="office-card"
              key={office.id}
            >
              <div className="office-card__top">
                <div className="office-card__icon">
                  <Building2
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3>{office.city}</h3>
                  <span>{office.countryCode}</span>
                </div>
              </div>

              <div className="office-card__details">
                <div className="office-card__detail">
                  <MapPin
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>
                    {office.address}
                  </span>
                </div>

                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="office-card__detail"
                >
                  <Phone
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>
                    {office.phone}
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficesSection;