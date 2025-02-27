const express = require("express");
const cors = require("cors");
const sequelize = require("./Backend/config/database");
const userRoutes = require("./Backend/routes/userRoutes");
const orderRoutes = require("./Backend/routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Sincronizar con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log("Conectado a la base de datos MySQL");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos", err);
  });
