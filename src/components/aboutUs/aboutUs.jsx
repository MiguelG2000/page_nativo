import React from 'react';
import './AboutUs.css';
import equipo from '../../assets/img/equipo.jpg';

function AboutUs() {
  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>¿Quiénes Somos?</h2>
          <div className="divider"></div>
          <p className="section-description">Conoce más sobre nuestra empresa y lo que nos hace diferentes</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>Somos una empresa 100% chiapaneca, productora y comercializadora en el ramo constructor. Ofrecemos una amplia variedad de productos y sistemas constructivos para cada obra.</p>
            <p>Podemos ser parte de tu obra, desde la parte inicial hasta los últimos acabados.</p>
            <ul className="features-list">
              <li><i className="fas fa-check-circle"></i> Medidas mixtas</li>
              <li><i className="fas fa-check-circle"></i> Poliestireno expandido</li>
              <li><i className="fas fa-check-circle"></i> Soluciones a medida</li>
              <li><i className="fas fa-check-circle"></i> Materiales sustentables</li>
            </ul>
          </div>

          <div className="about-image">
            <img src={equipo} alt="Equipo NATIVO" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;