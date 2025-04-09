import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="logo">GRUPO NATIVO</a>
          <button id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div id="menu" className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#aplicaciones">Aplicaciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <button id="desktop-theme-toggle" className="theme-toggle" onClick={toggleTheme}>
            <i className="fas fa-moon light-icon"></i>
            <i className="fas fa-sun dark-icon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;