import React, { useEffect, useState } from "react";

const GestionProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/api/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching productos:", error));
  }, []);

  return (
    <div>
      <h2>Gestión de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.descripcion} - ${producto.precio} -{" "}
            {producto.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionProductos;
