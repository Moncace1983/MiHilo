import React from 'react';
import Image from '../images/WhatsApp Image 2024-10-01 at 9.46.31 PM.jpeg'; 
import "../styles/Inicio.css";

const Inicio = () => {
    return (
        <div className='title'>
            <h1>Menú</h1>
            <img className='logo' src={Image} alt="Home" />
        </div>
    );
};

export default Inicio;