import React from "react";
import "../Styles/About.css";
import "../Styles/Home.css";

const About = () => {
  return (
    <section id="about" className="about-section mb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center pt-5">
            <img
              src="/images/fotoperfil.jpg"
              alt="Foto de perfil"
              className="img-fluid rounded-circle mb-4"
              style={{ width: "500", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="text-center justify-content-center align-content-center text-white pt-5">
              Sobre mí
            </h2>
            <p className="text-white">
              ¡Hola! Soy Facundo, un desarrollador apasionado por crear
              soluciones que marcan la diferencia.
            </p>
            <p className="text-white">
              Mi objetivo es seguir creciendo en el campo del desarrollo de
              software, aprendiendo constantemente y trabajando en proyectos
              innovadores.
            </p>
            <ul className="footer-social-links my-4">
              <li>
                <a
                  href="https://github.com/KameyhaFacundo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="cta-button"
                  href="https://www.linkedin.com/in/facundo-kameyha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="cta-button"
                  href="https://wa.me/5493815069332"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  className="cta-button"
                  href="mailto:kameyhafacundo@gmail.com"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
