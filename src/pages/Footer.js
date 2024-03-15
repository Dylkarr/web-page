import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';
import logo from '../img/logoThink.png';
import { Link } from 'react-router-dom';
import '../estilos/Footer.css';


const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <div className="logo-footer">
          <img src={logo} alt="Logo" />
        </div>
        <p className="footer-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicio">Servicios</Link></li>
          <li><Link to="/sofiaWorkplace">Sofia Workplace</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-company-about">
          <h1>Nosotros</h1>
          <p>Nos enfocamos en brindar respuestas efectivas a los dilemas empresariales que usted enfrenta. Usamos herramientas diseñadas específicamente para atender necesidades particulares.</p>
        </div>
        <div className="footer-icons">
          <a href="#fa"><FaFacebook /></a>
          <a href="#tw"><FaXTwitter /></a>
          <a href="#li"><FaLinkedin /></a>
          <a href="#gi"><FaGithub /></a>
        </div>
      </div>
      <div className="footer-center">
        <div>
          <h6><FaMapMarkerAlt /></h6>
          <p> Monjitas 527, Santiago Centro - Chile.</p>
        </div>
        <div>
          <h6><FaPhone /></h6>
          <p>+56 9 67895556</p>
        </div>
        <div>
          <h6><FaEnvelope /></h6>
          <p><a href="infothink@ideainmotion.cl">infothink@ideainmotion.cl</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
