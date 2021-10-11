const dotenv = require('dotenv');

const config = dotenv.config({
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
});

module.exports = config.parsed;
