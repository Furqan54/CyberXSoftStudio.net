
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import PageHero from "../../components/PageHero";
import FAQSection from "../../components/FAQSection";

import ContactForm from "./ContactForm";
import OfficesSection from "./OfficesSection";

import { siteConfig } from "../../config/siteConfig";

import {
  contactDetails,
  contactFaqs,
} from "./contactData";

import "./contact.css";

/* ========================================
   WHAT HAPPENS NEXT
======================================== */

const contactSteps = [
  {
    id: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about the objective, challenge, timeline, and what support you may need.",
  },
  {
    id: "02",
    title: "We Review the Details",
    description:
      "We consider the context, relevant capabilities, and any information needed to clarify the requirement.",
  },
  {
    id: "03",
    title: "Agree a Starting Point",
    description:
      "If there is a suitable fit, we discuss an appropriate next step, such as discovery, assessment, or a defined scope.",
  },
];

function ContactPage() {
  return (
    <main className="contact-page">

      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow="Contact"
        title="Tell Us What You Need to Build Improve or Secure"
        description="Share the objective, current challenge, expected timeline, and any important constraints. Our team will review the requirement and respond with the most useful next step."
        breadcrumbs={[
          {
            label: "Contact",
          },
        ]}
        showImagePlaceholder
      />

      {/* ========================================
          MAIN CONTACT SECTION
      ======================================== */}

      <section
        className="contact-main"
        aria-labelledby="contact-main-title"
      >
        <div className="container">

          <div className="contact-main__heading">
            <span className="eyebrow">
              Start a Conversation
            </span>

            <h2 id="contact-main-title">
              Let's Talk About Your Requirements
            </h2>

            <p>
              Whether you have a defined project,
              need additional specialists, or are
              exploring the right solution, tell us
              what you're working towards.
            </p>
          </div>

          <div className="contact-main__layout">

            {/* ====================================
                EXISTING CONTACT FORM
                FORM LOGIC REMAINS UNCHANGED
            ==================================== */}

            <ContactForm />

            {/* ====================================
                CONTACT SIDEBAR
            ==================================== */}

            <div className="contact-main__sidebar">

              <aside
                className="contact-info"
                aria-labelledby="contact-info-title"
              >
                <div className="contact-info__header">
                  <span className="contact-info__eyebrow">
                    Direct Contact
                  </span>

                  <h2 id="contact-info-title">
                    Get in Touch
                  </h2>

                  <p>
                    {contactDetails.responseTime}
                  </p>
                </div>

                <div className="contact-info__list">

                  {/* EMAIL */}

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="contact-info__item"
                  >
                    <div className="contact-info__icon">
                      <Mail
                        size={20}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="contact-info__item-content">
                      <span>Email Us</span>

                      <strong>
                        {siteConfig.email}
                      </strong>
                    </div>

                    <ArrowUpRight
                      className="contact-info__arrow"
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>

                  {/* PHONE */}

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="contact-info__item"
                  >
                    <div className="contact-info__icon">
                      <Phone
                        size={20}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="contact-info__item-content">
                      <span>Phone and WhatsApp</span>

                      <strong>
                        {siteConfig.phone}
                      </strong>
                    </div>

                    <ArrowUpRight
                      className="contact-info__arrow"
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>

                  {/* BUSINESS HOURS */}

                  {contactDetails.businessHours && (
                    <div className="contact-info__item">
                      <div className="contact-info__icon">
                        <Clock3
                          size={20}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="contact-info__item-content">
                        <span>Business Hours</span>

                        <strong>
                          {contactDetails.businessHours}
                        </strong>
                      </div>
                    </div>
                  )}
                </div>

                <div className="contact-info__privacy">
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <p>
                    For sensitive requirements,
                    you can keep your initial
                    enquiry high-level until
                    appropriate confidentiality
                    arrangements are discussed.
                  </p>
                </div>
              </aside>

              {/* ====================================
                  WHAT HAPPENS NEXT
              ==================================== */}

              <div className="contact-next">
                <div className="contact-next__header">
                  <span className="eyebrow">
                    Our Approach
                  </span>

                  <h3>
                    What Happens Next?
                  </h3>

                  <p>
                    A practical route from your
                    initial enquiry to an agreed
                    next step.
                  </p>
                </div>

                <div className="contact-next__steps">
                  {contactSteps.map((step) => (
                    <div
                      className="contact-next__step"
                      key={step.id}
                    >
                      <span className="contact-next__number">
                        {step.id}
                      </span>

                      <div>
                        <h4>{step.title}</h4>

                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-next__footer">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  <span>
                    You can begin with an initial
                    objective, even if the full
                    scope is not yet defined.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          OUR OFFICE
      ======================================== */}

      <OfficesSection />

      {/* ========================================
          CONTACT FAQ
      ======================================== */}

      <FAQSection
        items={contactFaqs}
        title="Contact FAQ"
      />

    </main>
  );
}

export default ContactPage;
