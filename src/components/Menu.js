import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = ({ isVisible, toggleSidebar }) => {
    return (
        <div className={`menu ${isVisible ? 'visible' : 'hidden'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isVisible ? '◀' : '▶'}
            </button>
            {isVisible && (
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/empleo">Empleo</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Menu;

