import React from 'react';
import '../estilos/Servicio.css';
import InfiniteLoopImg from "../components/InfiniteLoopImg";
import TextoHome from "../components/TextoHome";
import Hablar from "../components/Hablar"
import BackToTopButton from '../components/BackToTopButton';
import FondoServicio from '../img/fondo2.png'


const Servicio = () =>{
    return (
        <div className="servicio">
            <TextoHome
                title= 'Servicios'
                fondoProp={FondoServicio}
            />
            <Hablar/>
            <InfiniteLoopImg/>
            <BackToTopButton/>
        </div>
    );
}

export default Servicio;