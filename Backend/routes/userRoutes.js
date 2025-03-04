import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al registrar el usuario" });
  }
});

// Ruta para iniciar sesión
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }
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
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña actual incorrecta" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.json({ message: "Contraseña cambiada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al cambiar la contraseña" });
  }
});

export default router;
