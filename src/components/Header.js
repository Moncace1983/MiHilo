import React from "react";
import "../styles/Header.css";
import logo from "../images/logo2.png";

const Header = () => {
    return (
        <header className="header">
        <h1>Confecciones Claudia Ltda.</h1>
        <img src={logo} alt="Logo" />
        </header>
    );
};

export default Header;