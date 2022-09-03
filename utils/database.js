const { Sequelize } = require("sequelize");

// Establish db connection
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "k43344687",
  port: 5432,
  database: "exerciseOne",
  logging: false,
});

module.exports = { db };
