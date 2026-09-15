import {
  Clock3,
  Mail,
  Phone,
} from "lucide-react";

import PageHero from "../../components/PageHero";

import ContactForm from "./ContactForm";
import OfficesSection from "./OfficesSection";

import { siteConfig } from "../../config/siteConfig";
import { contactDetails } from "./contactData";

import "./contact.css";

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        description="Whether you're ready to begin a project or just exploring your options, we're here to help. Our team responds within one business day."
        breadcrumbs={[
          {
            label: "Contact",
          },
        ]}
        showImagePlaceholder
      />

      <section className="contact-main">
        <div className="container contact-main__layout">
          <ContactForm />

          <aside className="contact-info">
            <div className="contact-info__header">
              <h2>Get in Touch</h2>

              <p>
                {contactDetails.responseTime}
              </p>
            </div>

            <div className="contact-info__list">
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact-info__item"
              >
                <div className="contact-info__icon">
                  <Mail
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    {siteConfig.email}
                  </strong>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="contact-info__item"
              >
                <div className="contact-info__icon">
                  <Phone
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    {siteConfig.phone}
                  </strong>
                </div>
              </a>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Clock3
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>Business Hours</span>
                  <strong>
                    {contactDetails.businessHours}
                  </strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <OfficesSection />
    </main>
  );
}

export default ContactPage;