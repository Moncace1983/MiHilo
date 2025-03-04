import { Sequelize } from "sequelize";

const sequelize = new Sequelize("invproCC", "root", "Cesar1983*", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
