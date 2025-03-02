const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("invproCC", "root", "Cesar1983*", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
