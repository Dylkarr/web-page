import React, { useState, useEffect } from 'react';
import '../estilos/BackToTopButton.css'; // Estilo CSS para el botón

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el botón cuando el usuario haya desplazado más de 300px hacia abajo
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll suave al principio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
