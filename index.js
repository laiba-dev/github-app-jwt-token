require("dotenv").config();

const jwt = require("jsonwebtoken");
const fs = require("fs").promises;

const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;

const generateToken = async () => {
  try {
    const privateKey = await fs.readFile(PRIVATE_KEY_PATH, "utf-8");
    const date = Math.floor(new Date().getTime() / 1000);

    const payload = {
      iat: date - 60,
      exp: date + 10 * 60,
      iss: "APP_ID",
    };

    const jwtToken = jwt.sign(payload, privateKey, { algorithm: "RS256" });
    console.log(jwtToken);
  } catch (error) {
    console.error("Error reading file data", error);
  }
};

generateToken();
