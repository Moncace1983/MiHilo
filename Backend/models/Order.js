import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Order = sequelize.define("Order", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pending",
  },
});

export default Order;
