import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../components/Button.js";
import images from "../images/WhatsApp Image 2024-10-01 at 9.46.31 PM.jpeg";
import "../styles/Home.css"; 

const Home = () => {
    return (
        <div className="container-home">
            <div className="home">
                <h2>Bienvenidos a Confecciones Claudia Ltda.</h2>
                <p>Este es el sistema de gestión integral MiHilo.</p>
                <p>Por favor inicie sesión para continuar.</p>
                <Link to="/login">
                    <Button text="Iniciar Sesión" />
                </Link>
            </div>
            <div className='imagen-home'>
                <img src={images} alt="Confecciones Claudia Ltda." />
            </div>
        </div>
    );
};

export default Home;
