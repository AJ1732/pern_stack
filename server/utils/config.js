const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  db: process.env.DB,
  db_port: process.env.DB_PORT,
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
};