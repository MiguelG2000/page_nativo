import React, { useState, useEffect } from 'react';
import sistema from '../../assets/img/sistema.webp';
import materiales from '../../assets/img/materiales.webp';
import chiapaneco from '../../assets/img/chiapaneco.webp';
import './Carousel.css'; // Importamos el CSS específico

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: sistema,
      title: "Innovación en Sistemas Constructivos",
      description: "Soluciones avanzadas para cada etapa de tu obra",
      link: "#productos",
      linkText: "Ver Productos"
    },
    {
      image: materiales,
      title: "Materiales Sustentables",
      description: "Tecnología eco-amigable para construcciones eficientes",
      link: "#aplicaciones",
      linkText: "Ver Aplicaciones"
    },
    {
      image: chiapaneco,
      title: "100% Chiapaneco",
      description: "Calidad y servicio con identidad local",
      link: "#nosotros",
      linkText: "Conócenos"
    }
  ];

  return (
    <section id="inicio" className="carousel">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <a href={slide.link} className="slide-button">{slide.linkText}</a>
          </div>
        </div>
      ))}

      <div className="slider-controls">
        <button className="prev-slide" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button className="next-slide" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Carousel;