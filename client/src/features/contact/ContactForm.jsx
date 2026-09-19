import { useState } from "react";
import { Send } from "lucide-react";

import { services } from "../services/servicesData";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({
    type: "",
    text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setFormMessage({
      type: "",
      text: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      workEmail: formData.get("workEmail"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setFormMessage({
        type: "success",
        text:
          result.message ||
          "Your enquiry has been received.",
      });

      form.reset();
    } catch (error) {
      setFormMessage({
        type: "error",
        text:
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__header">
        <h2>Send Us a Message</h2>

        <p>
          Fill in the form below and we'll respond within one
          business day.
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
            maxLength="100"
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
            maxLength="150"
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
            maxLength="150"
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
            maxLength="50"
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
            <option value="">
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
            maxLength="3000"
            required
          />
        </div>
      </div>

      {formMessage.text && (
        <div
          className={`contact-form__message contact-form__message--${formMessage.type}`}
          role="status"
          aria-live="polite"
        >
          {formMessage.text}
        </div>
      )}

      <button
        type="submit"
        className="contact-form__submit"
        disabled={isSubmitting}
      >
        <Send
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />

        {isSubmitting
          ? "Sending..."
          : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;