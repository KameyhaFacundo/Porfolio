import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4">¡Hola, soy Facundo👋 !</h1>
        <p>
          Desarrollador apasionado por crear soluciones innovadoras. Bienvenido
          a mi portafolio.
        </p>
        <a href="#about" className="cta-button">
          Conoce más sobre mí
        </a>
      </div>
    </section>
  );
};

export default Home;
