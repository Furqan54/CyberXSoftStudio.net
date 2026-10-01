
const ContactEnquiry = require(
  "../models/ContactEnquiry"
);

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

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

const createContactEnquiry = async (req, res) => {
  try {
    const fullName = cleanText(
      req.body.fullName
    );

    const workEmail = cleanText(
      req.body.workEmail
    ).toLowerCase();

    const company = cleanText(
      req.body.company
    );

    const phone = cleanText(
      req.body.phone
    );

    const service = cleanText(
      req.body.service
    );

    const message = cleanText(
      req.body.message
    );

    const preferredContactMethod = cleanText(
      req.body.preferredContactMethod
    );

    const privacyConsent =
      req.body.privacyConsent === true;

    // =====================================
    // Required fields
    // =====================================

    if (!fullName || !workEmail || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, work email, and message are required.",
      });
    }

    // =====================================
    // Name validation
    // =====================================

    if (
      fullName.length < 2 ||
      fullName.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Full name must be between 2 and 100 characters.",
      });
    }

    // =====================================
    // Email validation
    // =====================================

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

    // =====================================
    // Optional text field limits
    // =====================================

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

    // =====================================
    // Service validation
    // =====================================

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

    // =====================================
    // Message validation
    // =====================================

    if (
      message.length < 10 ||
      message.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Message must be between 10 and 3000 characters.",
      });
    }

    // =====================================
    // Contact preference validation
    // =====================================

    if (
      !allowedContactMethods.includes(
        preferredContactMethod
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please select a valid contact method.",
      });
    }

    if (
      ["phone", "whatsapp"].includes(
        preferredContactMethod
      ) &&
      !phone
    ) {
      return res.status(400).json({
        success: false,
        message:
          "A phone number is required for phone or WhatsApp contact.",
      });
    }

    // =====================================
    // Privacy consent validation
    // =====================================

    if (!privacyConsent) {
      return res.status(400).json({
        success: false,
        message:
          "Please accept the privacy consent before sending your enquiry.",
      });
    }

    // =====================================
    // Save enquiry
    // =====================================

    const enquiry = await ContactEnquiry.create({
      fullName,
      workEmail,
      company,
      phone,
      service,
      message,
      preferredContactMethod,
      privacyConsent: true,
      privacyConsentAt: new Date(),
    });

    return res.status(201).json({
      success: true,

      message:
        "Thank you. Your enquiry has been received. A member of the CyberX Soft team will contact you using the details provided.",

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
