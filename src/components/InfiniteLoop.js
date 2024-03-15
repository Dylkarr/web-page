import React from 'react';
import '../estilos/InfiniteLoop.css'; // Archivo CSS para estilos

const TAGS = ['DesarrolloDeSoftware', 'MantenimientoDeSoftware', 'IntegracionEntreAplicaciones', 'InfraestructuraCloud', 'AutomatizacionRoboticaDeProcesos', 'ServicioDeAsistenciaTecnica'];
const DURATION = 40000;
const ROWS = 2;
const TAGS_PER_ROW = 6;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
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

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);


const InfiniteLoop = () => {
  return (
    <>
    <div className='titulo-tag'>
      <h1>Servicios a medida</h1>
      <p>Servicios tecnológicos perzonalizados para todas tus exigencias de negocio.</p>
    </div>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
    </>
  );
};

export default InfiniteLoop;