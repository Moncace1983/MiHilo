import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Confecciones Claudia Ltda. - Todos los derechos reservados.</p>
            <nav>
                <ul>
                    <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
                    <li><a href="/terminos-de-servicio">Términos de Servicio</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
