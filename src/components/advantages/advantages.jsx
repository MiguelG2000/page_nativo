import React from 'react';
import './Advantages.css';

function Advantages() {
  const advantages = [
    {
      icon: "leaf",
      title: "Sustentable",
      description: "Materiales reciclables y tecnologías eco-amigables que reducen el impacto ambiental."
    },
    {
      icon: "bolt",
      title: "Rápida Instalación",
      description: "Sistemas autoensamblables que reducen tiempos de construcción y mano de obra."
    },
    {
      icon: "shield-alt",
      title: "Resistente",
      description: "Alta resistencia estructural y durabilidad en condiciones extremas."
    },
    {
      icon: "fire-extinguisher",
      title: "Seguridad",
      description: "Materiales autoextinguibles que cumplen con normas de protección contra incendios."
    },
    {
      icon: "temperature-low",
      title: "Aislamiento",
      description: "Excelente aislamiento térmico y acústico para mayor confort y eficiencia energética."
    },
    {
      icon: "piggy-bank",
      title: "Económico",
      description: "Reducción de costos en materiales, transporte y mano de obra."
    }
  ];

  return (
    <section className="advantages-section">
      <div className="container">
        <div className="section-header">
          <h2>Ventajas de Nuestros Productos</h2>
          <div className="divider"></div>
          <p className="section-description">
            Descubre las características que hacen de nuestros productos la mejor opción para tus proyectos
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                <i className={`fas fa-${advantage.icon}`}></i>
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;