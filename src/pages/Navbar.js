import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../estilos/Navbar.css'; // Archivo CSS para estilos*/
import logo from '../img/logoThink.png'
import Footer from './Footer';
import DownFooter from '../components/DownFooter';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {/*desenfoque*/
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo(0, 0); // Desplaza la página hasta arriba
    };

    window.addEventListener('scroll', handleScroll);

    scrollToTop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-navbar">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`nav-links`}>
          <div className='nav-blur'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicio">Servicios</Link></li>
            <li><Link to="/sofiaWorkplace">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><button className='zona-clientes'>Zona Clientes</button></li>
          </div>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
      <DownFooter/>
      {isScrolled && <div className='blur-background'></div>}
    </>
  );
}
export default Navbar;
