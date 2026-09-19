const mongoose = require("mongoose");

const contactEnquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    workEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
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
      default: "",
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
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