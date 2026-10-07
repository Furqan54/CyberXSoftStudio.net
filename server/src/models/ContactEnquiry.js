
const mongoose = require("mongoose");

const allowedServices = [
  "brand-strategy-digital-growth",
  "creative-media-design-animation",
  "ai-software-digital-solutions",
  "data-cybersecurity-digital-governance",
  "talent-augmentation-delivery-support",
  "not-sure-yet",
];

const allowedContactMethods = [
  "",
  "email",
  "phone",
  "whatsapp",
];

const contactEnquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    workEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address.",
      ],
    },

    company: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
      maxlength: 50,
      default: "",
    },

    service: {
      type: String,
      trim: true,
      enum: ["", ...allowedServices],
      default: "",
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 3000,
    },

    preferredContactMethod: {
      type: String,
      trim: true,
      enum: allowedContactMethods,
      default: "",
    },

    privacyConsent: {
      type: Boolean,
      required: true,

      validate: {
        validator: (value) => value === true,
        message:
          "Privacy consent is required.",
      },
    },

    privacyConsentAt: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "qualified",
        "closed",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const ContactEnquiry = mongoose.model(
  "ContactEnquiry",
  contactEnquirySchema
);

module.exports = ContactEnquiry;
