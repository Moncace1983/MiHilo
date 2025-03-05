import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    // Hashear la contraseña del usuario
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario en la base de datos
    await User.create({
      username,
      password: hashedPassword,
      email,
    });
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al registrar el usuario" });
  }
});

// Ruta para iniciar sesión
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    // Comparar la contraseña ingresada con la almacenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }
    // Generar un token JWT
    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: "Error al iniciar sesión" });
  }
});

// Ruta para cambiar la contraseña
router.post("/change-password", async (req, res) => {
  const { username, currentPassword, newPassword } = req.body;
  try {
    // Buscar el usuario en la base de datos
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    // Comparar la contraseña actual ingresada con la almacenada
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña actual incorrecta" });
    }
    // Hashear la nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Actualizar la contraseña del usuario en la base de datos
    user.password = hashedPassword;
    await user.save();
    res.json({ message: "Contraseña cambiada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al cambiar la contraseña" });
  }
});

export default router;
