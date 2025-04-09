import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, mensaje } = formData;
    const whatsappNumber = '+529616936644';
    const encodedMessage = encodeURIComponent(
      `Nombre: ${nombre}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    setFormData({ nombre: '', telefono: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>Contacto</h2>
          <div className="divider"></div>
          <p>Estamos listos para atenderte y asesorarte en tu próximo proyecto</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>20 Poniente Sur #550B, Tuxtla Gutierrez, Chiapas</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <p>961 693 6644</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>nativo.ta.mx@gmail.com</p>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100077340185701" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/nativo_ta?igsh=MTR0ODNwc2tsdm5oaA==" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/529616936644" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <div className="download-links">
              <a href="/pdf/Catálogo General.pdf" className="download-link">
                <i className="fas fa-download"></i> Descargar catálogo general
              </a>
              <a href="/pdf/Catálogo 3D.pdf" className="download-link">
                <i className="fas fa-download"></i> Descargar catálogo 3D
              </a>
              <a href="/pdf/Catálogo Lambrin WPC.pdf" className="download-link">
                <i className="fas fa-download"></i> Descargar catálogo lambrín WPC
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="Nombre completo" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  placeholder="Teléfono" 
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5" 
                  placeholder="Mensaje" 
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;