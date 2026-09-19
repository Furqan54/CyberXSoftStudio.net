const ContactEnquiry = require("../models/ContactEnquiry");

const createContactEnquiry = async (req, res) => {
  try {
    const {
      fullName,
      workEmail,
      company = "",
      phone = "",
      service = "",
      message,
    } = req.body;

    if (!fullName || !workEmail || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Full name, work email, and message are required.",
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
        message: "Please check the submitted information.",
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