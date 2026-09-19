const dns = require("dns");
const mongoose = require("mongoose");

// DNS fallback for local networks that refuse MongoDB SRV lookups.
dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

let isConnected = false;

const connectDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        dbName: "cyberxsoft",
        authSource: "admin",
      }
    );

    isConnected = true;

    console.log(
      `MongoDB connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    throw error;
  }
};

module.exports = connectDatabase;