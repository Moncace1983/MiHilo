import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ isVisible, toggleSidebar,handleLogout }) => {
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
<<<<<<< HEAD
            <li><Link to="/inicio">Menú</Link></li>
=======
            <li><Link to="/menu">Menú</Link></li>
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
            <li><Link to="/kardex">Kardex</Link></li>
            <li><Link to="/gestion-ordenes">Gestión Órdenes</Link></li>
            <li><Link to="/gestion-productos">Gestión Productos</Link></li>
            <li><Link to="/informes">Informes</Link></li>
<<<<<<< HEAD
            <li><button className="button-sidebar" onClick={handleLogout}>Cerrar Sesión</button></li>
=======
            <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
          </ul>
        </nav>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;

>>>>>>> cbbae4486c893c76309958de1f92a810cfedd78b
