import React from 'react';
import '../estilos/Home.css'; // Archivo CSS para estilos
import TextoHome from '../components/TextoHome';
import BackToTopButton from '../components/BackToTopButton';
import InfiniteLoop from '../components/InfiniteLoop';
import Hablar from '../components/Hablar';
import ProgFondo from '../img/progFondo.png'

const Home = () => {
  return (
  <div className='home'>
    <TextoHome
      title = 'Innovación en Movimiento'
      subtitle = 'Transformando ideas en realidades digitales. En Think, garantizamos innovación y calidad superior en cada solución. Avanza con nosotros hacia la excelencia digital y deja que tu visión cobre vida.'
      buttonText= 'Contactanos!'
      fondoProp={ProgFondo}
    />
    <InfiniteLoop/>
    <Hablar/>
    <BackToTopButton/>
  </div>
  );
};

export default Home;