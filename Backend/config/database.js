// filepath: /c:/Users/USER/my-inventory-app/Backend/config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("invproCC", "root", "Cesar1983*", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
