import React from 'react';
import '../estilos/InfiniteLoopImg.css'; // Archivo CSS para estilos
import Node from '../img/node.svg';
import Nest from '../img/nest.svg';
import Vue from '../img/vue.svg';
import Python from '../img/python.svg';
import Android from '../img/android.svg';
import Apple from '../img/apple.svg';
import Postgre from '../img/postgre.svg';

const IMAGES = [Node, Nest, Vue, Python, Android, Apple, Postgre];
const DURATION = 40000; // Duración del bucle en milisegundos
const ROWS = 1; // Número de filas de imágenes
const IMAGES_PER_ROW = 7;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className='loop-slider' style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Image = ({src}) => (
  <div className='image'>
    <img src={src} alt='' />
  </div>
);


const InfiniteLoopImg = () => {
    return (
        <>
          <div className='titulo-tag'>
            <h1>Nuestro dia a dia</h1>
            <p></p>
          </div>
          <div className='image-list'>
            {[...new Array(ROWS)].map((_, i) => (
              <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                {shuffle(IMAGES).slice(0, IMAGES_PER_ROW).map(image => (
                  <Image src={image} key={image} />
                ))}
              </InfiniteLoopSlider>
            ))}
            <div className='fade' />
          </div>
        </>
      );
    };

export default InfiniteLoopImg;
