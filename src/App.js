import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Empleo from "./pages/Empleo";
import Contacto from "./pages/Contacto";
import Kardex from "./pages/Kardex";
import GestionOrdenes from "./pages/GestionOrdenes";
import GestionProductos from "./pages/GestionProductos";
import Informes from "./pages/Informes";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import CambiarContraseña from "./pages/CambiarContraseña";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const showMenu = [
    "/",
    "/sobre-nosotros",
    "/empleo",
    "/contacto"
  ].includes(location.pathname);
  const hideSidebarAndMenu = ["/login", "cambiar-contraseña"].includes(location.pathname);

  return (
    <div className="app">
      <Header />
      {!hideSidebarAndMenu &&
        (showMenu ? (
          <Menu isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        ) : (
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        ))}
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
            <Route path="*" element={<h1>404 Not found</h1>}/>
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
};

export default App;
