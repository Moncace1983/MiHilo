import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from '../models/User.js'; // Asegúrate de que la ruta sea correcta
import sequelize from '../config/database.js'; // Configura tu conexión de Sequelize

const app = express();

// Habilitar CORS para permitir solicitudes desde localhost:3000 (frontend)
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware para parsear JSON
app.use(express.json());

// Ruta para registrar un nuevo usuario
app.post('/api/users/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    await User.create({
      username,
      password,  // La contraseña se cifrará automáticamente por el hook `beforeCreate` de Sequelize
      email,
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para iniciar sesión
app.post('/api/users/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = await user.comparePassword(password);  // Compara la contraseña
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

