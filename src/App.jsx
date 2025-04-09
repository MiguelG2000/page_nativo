import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import AboutUs from './components/aboutUs/aboutUs';
import Products from './components/products/products';
import Applications from './components/applications/applications';
import Advantages from './components/advantages/advantages';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} />
      <Carousel />
      <AboutUs />
      <Products />
      <Applications />
      <Advantages />
      <Contact />
      <Footer />
      
      <div className="floating-button">
        <a href="https://wa.me/529616936644" target="_blank" rel="noopener noreferrer" className="whatsapp" title="Enviar mensaje por WhatsApp">
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
        <a href="tel:+529616936644" className="call" title="Llamar">
          <i className="fas fa-phone fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
