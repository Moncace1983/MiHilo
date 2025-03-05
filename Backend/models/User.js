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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Cifrar la contraseña antes de crear un usuario
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10); // 10 es el número de rondas de hash
  }
});

// Cifrar la contraseña antes de actualizar un usuario
User.beforeUpdate(async (user) => {
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10); // 10 es el número de rondas de hash
  }
});

// Método para comparar la contraseña en el inicio de sesión
User.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password); // Compara la contraseña proporcionada con la almacenada
};

export default User;
