import { Sequelize } from "sequelize";

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize("invproCC", "root", "Cesar1983*", {
  host: "localhost", // Asegúrate de que MySQL esté corriendo en tu localhost
  dialect: "mysql",  // Usamos MySQL como base de datos
  port: 3306,        // Este es el puerto predeterminado de MySQL (asegúrate de que MySQL esté en este puerto)
});

try {
  // Verificar la conexión
  await sequelize.authenticate();
  console.log("Conexión a la base de datos MySQL exitosa.");
} catch (error) {
  console.error("Error al conectar a la base de datos:", error);
}

export default sequelize;
