
import { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

import { services } from "../services/servicesData";

import "./contactFormExtras.css";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formMessage, setFormMessage] = useState({
    type: "",
    text: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const getText = (fieldName) =>
      String(formData.get(fieldName) ?? "").trim();

    const payload = {
      fullName: getText("fullName"),
      workEmail: getText("workEmail"),
      company: getText("company"),
      phone: getText("phone"),
      service: getText("service"),
      message: getText("message"),
      preferredContactMethod: getText(
        "preferredContactMethod"
      ),
      privacyConsent:
        formData.get("privacyConsent") === "on",
    };

    setFormMessage({
      type: "",
      text: "",
    });

    if (
      ["phone", "whatsapp"].includes(
        payload.preferredContactMethod
      ) &&
      !payload.phone
    ) {
      setFormMessage({
        type: "error",
        text:
          "Please provide your phone number if you prefer a phone call or WhatsApp.",
      });

      return;
    }

    if (!payload.privacyConsent) {
      setFormMessage({
        type: "error",
        text:
          "Please review and accept the privacy consent before sending your enquiry.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const apiBaseUrl = (
        import.meta.env.VITE_API_URL || ""
      ).replace(/\/+$/, "");

      if (!apiBaseUrl) {
        throw new Error(
          "The contact form is temporarily unavailable. Please email info@cyberxsoft.net."
        );
      }

      const response = await fetch(
        `${apiBaseUrl}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to submit your enquiry. Please try again."
        );
      }

      setFormMessage({
        type: "success",
        text:
          "Thank you. Your enquiry has been received. A member of the CyberX Soft team will contact you using the details provided.",
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
        <h2>Send Us an Enquiry</h2>

        <p>
          Tell us what you need help with. We aim to
          respond within one business day.
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
            placeholder="Your full name"
            autoComplete="name"
            minLength={2}
            maxLength={100}
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
            placeholder="you@company.com"
            autoComplete="email"
            maxLength={150}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="company">
            Company or Organization
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            autoComplete="organization"
            maxLength={150}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">
            Phone or WhatsApp
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+92 300 0000000"
            autoComplete="tel"
            maxLength={50}
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
              Select a service (optional)
            </option>

            {services.map((service) => (
              <option
                key={service.id}
                value={service.slug}
              >
                {service.slug ===
                "talent-augmentation-delivery-support"
                  ? "Staff Augmentation & Delivery Support"
                  : service.name}
              </option>
            ))}

            <option value="not-sure-yet">
              Not sure yet
            </option>
          </select>
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="message">
            What Would You Like to Achieve?{" "}
            <span>*</span>
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your goals, current challenges, and expected timeline..."
            minLength={10}
            maxLength={3000}
            required
          />
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="preferredContactMethod">
            Preferred Contact Method
          </label>

          <select
            id="preferredContactMethod"
            name="preferredContactMethod"
            defaultValue=""
          >
            <option value="">
              No preference
            </option>

            <option value="email">
              Email
            </option>

            <option value="phone">
              Phone Call
            </option>

            <option value="whatsapp">
              WhatsApp
            </option>
          </select>
        </div>
      </div>

      <div className="contact-form__privacy">
        <input
          id="privacyConsent"
          name="privacyConsent"
          type="checkbox"
          required
        />

        <label htmlFor="privacyConsent">
          I agree to CyberX Soft using the
          information I provide to respond to
          my enquiry, as described in the{" "}
          <Link
            to="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>
          . <span aria-hidden="true">*</span>
        </label>
      </div>

      {formMessage.text && (
        <div
          className={`contact-form__message contact-form__message--${formMessage.type}`}
          role={
            formMessage.type === "error"
              ? "alert"
              : "status"
          }
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
          : "Send Enquiry"}
      </button>
    </form>
  );
}

export default ContactForm;
