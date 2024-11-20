import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">¡Hablemos!</h2>
        <p className="contact-description">
          Estoy disponible para nuevos proyectos, ideas emocionantes o
          simplemente para conversar. ¡No dudes en contactarme!
        </p>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="tuemail@ejemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
