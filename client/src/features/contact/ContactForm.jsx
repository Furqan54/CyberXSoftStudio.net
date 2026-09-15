import { Send } from "lucide-react";

import { services } from "../services/servicesData";

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // FORM PLACEHOLDER
    // Connect this form to the backend/API when the server endpoint is ready.
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__header">
        <h2>Send Us a Message</h2>

        <p>
          Fill in the form below and we'll respond within one business day.
        </p>
      </div>

      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="fullName">
            Full Name <span>*</span>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Smith"
            autoComplete="name"
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="workEmail">
            Work Email <span>*</span>
          </label>

          <input
            id="workEmail"
            name="workEmail"
            type="email"
            placeholder="john@company.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="company">
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company Name"
            autoComplete="organization"
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 555 000 0000"
            autoComplete="tel"
          />
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="service">
            Service of Interest
          </label>

          <select
            id="service"
            name="service"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service...
            </option>

            {services.map((service) => (
              <option
                key={service.id}
                value={service.slug}
              >
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="message">
            Message <span>*</span>
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell us about your project or challenge..."
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="contact-form__submit"
      >
        <Send
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        Send Message
      </button>
    </form>
  );
}

export default ContactForm;