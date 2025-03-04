import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// cifrar la contraseña antes de crear o actualizar un usuario
user.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10); // 10 es el numero de rondas de hash
  }
  );

// Metodo para comparar la contraseña en el inicio de sesion
user.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);  // Compara la contraseña proporcionada con la almacenada
};

export default User;
