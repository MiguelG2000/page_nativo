import React, { useState } from 'react';
import './Applications.css';
import muroE from '../../assets/img/muroE.webp';
import techoL from '../../assets/img/techoL.webp';
import uvas from '../../assets/img/uvas.webp';
import cajaM from '../../assets/img/cajaM.webp';
import construpanel from '../../assets/img/construpanel.webp';
import infraestructuraP from '../../assets/img/infraestructuraP.webp';
import mueblesP from '../../assets/img/mueblesP.webp';
import estructuraM from '../../assets/img/estructuraM.webp';
import revestimientoD from '../../assets/img/revestimientoD.webp';
import piso from '../../assets/img/piso.webp';

function Applications() {
  const [activeTab, setActiveTab] = useState('construccion');

  const tabContent = {
    construccion: [
      {
        image: muroE,
        title: "Muros Estructurales",
        description: "Nuestros sistemas permiten construir muros estructurales sismorresistentes para edificios de hasta 20 pisos."
      },
      {
        image: techoL,
        title: "Techos y Losas",
        description: "Sistemas aligerantes para techos y losas que reducen peso manteniendo resistencia estructural."
      }
    ],
    agricultura: [
      {
        image: uvas,
        title: "Embalaje para Fruta",
        description: "Cajas especiales para uva de mesa que mantienen el producto en óptimas condiciones durante transporte y almacenamiento."
      },
      {
        image: cajaM,
        title: "Almacenamiento de Mariscos",
        description: "Cajas diseñadas para mantener la frescura de pescados y mariscos durante el tiempo necesario."
      }
    ],
    industrial: [
      {
        image: construpanel,
        title: "Naves Industriales",
        description: "Sistemas constructivos ideales para naves industriales, bodegas y almacenes con excelente aislamiento térmico."
      },
      {
        image: infraestructuraP,
        title: "Infraestructura Pesada",
        description: "Soluciones para carreteras, puentes, aeropuertos y otras infraestructuras que requieren materiales ligeros y resistentes."
      }
    ],
    carpinteria: [
      {
        image: mueblesP,
        title: "Muebles Personalizados",
        description: "Diseños personalizados para muebles de madera con alta durabilidad."
      },
      {
        image: estructuraM,
        title: "Estructuras de Madera",
        description: "Sistemas constructivos de madera ideales para interiores y exteriores."
      }
    ],
    acabados: [
      {
        image: revestimientoD,
        title: "Revestimientos Decorativos",
        description: "Acabados de alta calidad para interiores y exteriores."
      },
      {
        image: piso,
        title: "Pisos y Recubrimientos",
        description: "Sistemas de pisos con alta resistencia y diseño moderno."
      }
    ]
  };

  return (
    <section id="aplicaciones" className="applications-section">
      <div className="container">
        <div className="section-header">
          <h2>Aplicaciones</h2>
          <div className="divider"></div>
          <p className="section-description">Descubre las múltiples aplicaciones de nuestros productos</p>
        </div>

        <div className="applications-tabs">
          <div className="tabs-header">
            {Object.keys(tabContent).map((tab) => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'construccion' ? 'Construcción' : 
                 tab === 'agricultura' ? 'Sector Agropecuario' : 
                 tab === 'industrial' ? 'Industrial' : 
                 tab === 'carpinteria' ? 'Carpinteria' : 'Acabados'}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            <div className="app-slider">
              {tabContent[activeTab].map((item, index) => (
                <div key={index} className="app-slide">
                  <img src={item.image} alt={item.title} />
                  <div className="app-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;