import React, { useState } from 'react';
import './Products.css';
import construpanel from '../../assets/img/construpanel.webp';
import stealfoam from '../../assets/img/stealfoam.webp';
import insupanel from '../../assets/img/insupanel.webp';
import geofoam from '../../assets/img/geofoam.webp';
import caseton from '../../assets/img/caseton.webp';
import bovedilla from '../../assets/img/bovedilla.webp';
import placas from '../../assets/img/placas.webp';
import politerm from '../../assets/img/politerm.webp';
import molduras from '../../assets/img/molduras.webp';
import uvas from '../../assets/img/uvas.webp';
import losetas from '../../assets/img/losetas.webp';
import lambrin from '../../assets/img/lambrin.webp';

function Products() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const mainProducts = [
    {
      image: construpanel,
      title: "CONSTRUPANEL",
      description: "Sistema constructivo de muros estructurales, sismorresistentes y aislante para construcciones de hasta 20 pisos."
    },
    {
      image: stealfoam,
      title: "STEELFOAM",
      description: "Sistema constructivo de alto rendimiento para muros prefabricados que maximiza la eficiencia energética."
    },
    {
      image: insupanel,
      title: "INSULPANEL",
      description: "Panel modular compuesto por un núcleo de poliestireno expandido auto extinguible recubierto con lámina de acero."
    },
    {
      image: geofoam,
      title: "GEOFOAM",
      description: "Bloque de poliestireno expandido (EPS) usado como material de relleno para absorber cargas estructurales."
    }
  ];

  const extraProducts = [
    {
      image: caseton,
      title: "CASETÓN",
      description: "Bloques de EPS ajustables para aligerar losas de techo o entrepisos. Ahorra tiempo y materiales en construcciones reticulares."
    },
    {
      image: bovedilla,
      title: "BOVEDILLA",
      description: "Elemento aligerante de EPS para losas estructurales. Actúa como cimbra perdida soportando el concreto hasta su fraguado."
    },
    {
      image: placas,
      title: "PLACAS AISLANTES",
      description: "Paneles de poliestireno expandido para revestimiento térmico en muros, techos y pisos. Ideal para hospitales y naves industriales."
    },
    {
      image: politerm,
      title: "POLITERM BLU",
      description: "Son perlas de poliestireno expandido con diámetros de 3 a 6 mm. que se utiliza como agregado ultraligero para mezclas de mortero y concreto. las perlas son recubiertas con el aditivo e.i.a. que permite su distribución homogénea por toda la mezcla y la eliminación del problema de flotación"
    },
    {
      image: molduras,
      title: "MOLDURAS",
      description: "Elementos decorativos en poliestireno expandido para acabados arquitectónicos. Disponibles en diversos diseños y perfiles."
    },
    {
      image: uvas,
      title: "CAJA PARA UVA",
      description: "Embalaje aislante de poliestireno expandido que mantiene la frescura de la uva de mesa durante el transporte."
    },
    {
      image: losetas,
      title: "LOSETAS 3D",
      description: "Losetas decorativas en diversos modelos (Ondas, Hexágonos, Pirámide, Estrella, Diamante) en tamaños de 30x30cm y 20x20cm. Precios desde $391.50."
    },
    {
      image: lambrin,
      title: "LAMBRIN WPC",
      description: "Panel para interiores compuesto por 60% resina de madera y 40% PVC, con acabado texturizado. Disponible en varios modelos y colores. 14 piezas por caja (6.49 m²)."
    }
  ];

  const toggleProducts = () => {
    setShowAllProducts(!showAllProducts);
    setTimeout(() => {
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const ProductCard = ({ image, title, description }) => (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
        <div className="product-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="product-info">
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <section id="productos" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Productos</h2>
          <div className="divider"></div>
          <p className="subtitle">Sistemas constructivos innovadores para todo tipo de proyectos</p>
        </div>

        <div className="products-grid">
          {/* Main Products */}
          {mainProducts.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} description={product.description} />
          ))}

          {/* Extra Products */}
          {showAllProducts && (
            <div className="extra-products">
              {extraProducts.map((product, index) => (
                <ProductCard key={index} image={product.image} title={product.title} description={product.description} />
              ))}
            </div>
          )}
        </div>

        <div className="button-container">
          <button 
            onClick={toggleProducts} 
            className="toggle-button"
          >
            {showAllProducts ? 'Ver menos productos' : 'Ver todos los productos'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;