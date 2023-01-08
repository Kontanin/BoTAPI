// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  token: process.env.TOKEN,
  masterKey: process.env.API_KEY,
  port: process.env.PORT
};