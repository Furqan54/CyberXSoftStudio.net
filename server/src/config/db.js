const dns = require("dns");
const mongoose = require("mongoose");

// DNS fallback for networks that block MongoDB SRV lookups.
dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log(
      `MongoDB connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    process.exit(1);
  }
};

module.exports = connectDatabase;