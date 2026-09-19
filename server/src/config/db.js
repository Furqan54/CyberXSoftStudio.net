const dns = require("dns");
const mongoose = require("mongoose");

// Your current network has trouble resolving MongoDB SRV records,
// so Node will use Google and Cloudflare DNS.
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