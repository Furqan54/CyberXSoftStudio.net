const express = require("express");

const {
  createContactEnquiry,
} = require("../controllers/contactController");

const router = express.Router();

router.post("/", createContactEnquiry);

module.exports = router;