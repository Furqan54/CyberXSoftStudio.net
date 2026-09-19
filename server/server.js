require("dotenv").config();

const app = require("./src/app");
const connectDatabase = require("./src/config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(
      `CyberX Soft backend running on http://localhost:${PORT}`
    );
  });
};

startServer();