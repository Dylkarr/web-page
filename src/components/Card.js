import React from 'react';
import '../estilos/Card.css';

const Card = ({imagen, titulo, parrafo}) => {
  return (
    <>
        <div className="card">
          <div className="content">
            <div className="icono">
              <img src={imagen} alt="Imagen" className='imagen-circular'/>
            </div>
              <h2>{titulo}</h2>
              <p>{parrafo}</p>
          </div>
        </div>
    </>
  );
}

export default Card;