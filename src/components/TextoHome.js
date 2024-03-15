import React from 'react';
import '../estilos/TextoHome.css'; // Archivo CSS para estilos
import {useState, useEffect} from 'react';

const TextoHome = ({title, subtitle, buttonText, fondoProp}) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <div
       className='background'
       style={{
        transform: `translateY(${scrollPosition * 0.5}px)`,
        backgroundImage: `url(${fondoProp})`,
      
      
      }}
      ></div>
      <div className='content'>
        <div className='content-titulos'>
          <strong className='title'>{title}</strong>
          <p className='subtitle'>{subtitle}</p>
        </div>
        {buttonText && (
          <button className='button-home'>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export default TextoHome;