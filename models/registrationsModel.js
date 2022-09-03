const { db } = require("../utils/database");
const { DataTypes } = require("sequelize");

const Registration = db.define("registration", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATEe,
    allowNull: false,
  },

  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Working",
  },
});

module.exports = { Registration };
