import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import Menu from "./components/Menu.js";
import Home from "./pages/Home.js";
import SobreNosotros from "./pages/SobreNosotros.js";
import Empleo from "./pages/Empleo.js";
import Contacto from "./pages/Contacto.js";
import Kardex from "./pages/Kardex.js";
import GestionOrdenes from "./pages/GestionOrdenes.js";
import GestionProductos from "./pages/GestionProductos.js";
import Informes from "./pages/Informes.js";
import Login from "./pages/Login.js";
import Inicio from "./pages/Inicio.js";
import CambiarContraseña from "./pages/CambiarContraseña.js";
import Register from "./pages/Register.js";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Rutas donde se debe ocultar el Sidebar y el Menu
  const hideSidebarAndMenu = ["/login", "/cambiar-contraseña"].includes(
    location.pathname
  );

  // Rutas donde se debe mostrar el Menu
  const showMenu = ["/", "/sobre-nosotros", "/empleo", "/contacto"].includes(
    location.pathname
  );
  

  return (
    <div className="app">
      <Header />

    {/* Condicional para mostrar Sidebar o Menu basado en las rutas */}
      {!hideSidebarAndMenu &&
        (showMenu ? (
          <Menu isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        ) : (
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        ))}

  {/*Contenido principal */}
      <div
        className={`content ${
          isSidebarVisible && !hideSidebarAndMenu ? "shifted" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/empleo" element={<Empleo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/kardex" element={<Kardex />} />
          <Route path="/gestion-ordenes" element={<GestionOrdenes />} />
          <Route path="/gestion-productos" element={<GestionProductos />} />
          <Route path="/informes" element={<Informes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/cambiar-contraseña" element={<CambiarContraseña />} />
          <Route path="/registro" element={<Register />} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
