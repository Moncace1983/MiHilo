import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const location = useLocation();
  const hideSidebar = ["/login", "/cambiar-contraseña"].includes(location.pathname);

  if (hideSidebar) {
    return null;
  }

  return (
    <div className={`sidebar ${isVisible ? "visible" : "hidden"}`}>
      <button
        className={`toggle-button ${isVisible ? "opened" : "closed"}`}
        onClick={toggleSidebar}
      >
        {isVisible ? "◀" : "▶"}
      </button>
      {isVisible && (
        <nav>
          <ul>
            <li><Link to="/menu">Menú</Link></li>
            <li><Link to="/kardex">Kardex</Link></li>
            <li><Link to="/gestion-ordenes">Gestión Órdenes</Link></li>
            <li><Link to="/gestion-productos">Gestión Productos</Link></li>
            <li><Link to="/informes">Informes</Link></li>
            <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;

