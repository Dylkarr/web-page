import React, { useState } from 'react';
import '../estilos/Contacto.css';

const Contacto = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // Por ahora solo mostraremos la animación
    setIsChecked(true);
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="action-btn">Send</button>
      </form>
      <input type="checkbox" id="toggle" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="toggle" className="action-btn">Send mail</label>
      <label htmlFor="toggle" className="action-btn reset-action">Reset</label>
      <div className="shape-circle"></div>
      <div className="shape-outer-circle"></div>
      <svg className="icon icon-email">
        <polyline points="119,1 119,69 1,69 1,1"></polyline>
        <polyline points="119,1 60,45 1,1 119,1"></polyline>
      </svg>
      <svg className="icon icon-airplane">
        <polyline points="119,1 1,59 106,80 119,1"></polyline>
        <polyline points="119,1 40,67 43,105 69,73"></polyline>
      </svg>
    </div>
  );
}

export default Contacto;
