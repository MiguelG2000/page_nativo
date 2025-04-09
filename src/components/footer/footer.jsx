import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" className="logo">GRUPO NATIVO</a>
            <p className="description">Innovación en sistemas constructivos</p>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Productos</h3>
            <ul>
              <li><a href="#">Construpanel</a></li>
              <li><a href="#">Steelfoam</a></li>
              <li><a href="#">Insulpanel</a></li>
              <li><a href="#">Geofoam</a></li>
              <li><a href="#">Casetón</a></li>
              <li><a href="#">Bovedilla</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Empresa</h3>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#aplicaciones">Aplicaciones</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-legal">
            <h3 className="footer-heading">Legal</h3>
            <p className="legal-text">
              Al utilizar este sitio, aceptas nuestros términos y condiciones. Nos comprometemos a proteger tu información de acuerdo con nuestra política de seguridad.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 GRUPO NATIVO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;