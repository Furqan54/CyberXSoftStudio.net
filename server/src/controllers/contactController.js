const ContactEnquiry = require("../models/ContactEnquiry");

const allowedServices = [
  "brand-strategy-digital-growth",
  "creative-media-design-animation",
  "ai-software-digital-solutions",
  "data-cybersecurity-digital-governance",
  "talent-augmentation-delivery-support",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

const createContactEnquiry = async (req, res) => {
  try {
    const fullName = cleanText(req.body.fullName);
    const workEmail = cleanText(
      req.body.workEmail
    ).toLowerCase();
    const company = cleanText(req.body.company);
    const phone = cleanText(req.body.phone);
    const service = cleanText(req.body.service);
    const message = cleanText(req.body.message);

    if (!fullName || !workEmail || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, work email, and message are required.",
      });
    }

    if (fullName.length < 2 || fullName.length > 100) {
      return res.status(400).json({
        success: false,
        message:
          "Full name must be between 2 and 100 characters.",
      });
    }

    if (
      workEmail.length > 150 ||
      !emailPattern.test(workEmail)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide a valid email address.",
      });
    }

    if (company.length > 150) {
      return res.status(400).json({
        success: false,
        message:
          "Company name is too long.",
      });
    }

    if (phone.length > 50) {
      return res.status(400).json({
        success: false,
        message:
          "Phone number is too long.",
      });
    }

    if (
      service &&
      !allowedServices.includes(service)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select a valid service.",
      });
    }

    if (message.length < 10 || message.length > 3000) {
      return res.status(400).json({
        success: false,
        message:
          "Message must be between 10 and 3000 characters.",
      });
    }

    const enquiry = await ContactEnquiry.create({
      fullName,
      workEmail,
      company,
      phone,
      service,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been received.",
      data: {
        id: enquiry._id,
        status: enquiry.status,
        createdAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message:
          "Please check the submitted information.",
      });
    }

    console.error(
      "Contact enquiry error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while submitting the enquiry.",
    });
  }
};

module.exports = {
  createContactEnquiry,
};