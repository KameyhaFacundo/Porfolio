import React from "react";
import "../Styles/Certificate.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaGit,
  FaSitemap,
  FaWifi,
  FaLanguage,
} from "react-icons/fa";

const Certificat = () => {
  const certificates = [
    {
      title: "Universidad Nacional de Tucumán - Ingeniería en Computación",
      description: "2017 - Actualidad, San Miguel de Tucumán, Tucumán.",
      imageUrl: "../src/images/proceso.png",
    },
    {
      title: "Argentina Programa 4.0 - Desarrollo Front-end",
      description: "Tecnologías: HTML, CSS, JavaScript.",
      imageUrl: "../src/images/ticmas.png",
    },
    {
      title: "Rolling Code School - Desarrollo Full Stack",
      description:
        "Tecnologías: HTML, CSS (Bootstrap), JavaScript (React.js), MongoDB, SCRUM.                                           ",
      imageUrl: "../src/images/Rolling.PNG",
    },
    {
      title: "Global Learning - .NET",
      description: "Febrero 2023 - Diciembre 2023.",
      imageUrl: "../src/images/GlobalLearningNet.jpeg",
    },
    {
      title: "Curso de PostgreSQL - Platzi",
      description: "Octubre 2024 - Noviembre 2024.",
      imageUrl: "../src/images/postgresql.png",
    },
    {
      title:
        "Curso de Ingeniería de Datos de Alto Rendimiento con la herramienta CASE",
      description: "Universidad Nacional de Tucumán - 2024.",
      imageUrl: "../src/images/proceso.png",
    },
    {
      title: "Taller de Criptomonedas, Blockchain y Contratos Inteligentes",
      description: "Universidad Nacional de Tucumán - 2024.",
      imageUrl: "../src/images/blockain.png",
    },
  ];

  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Bases de Datos", icon: <FaDatabase /> },
    { name: "Git & GitHub", icon: <FaGit /> },
    { name: "SCRUM", icon: <FaSitemap /> },
    { name: "Redes", icon: <FaWifi /> },
    { name: "Inglés", icon: <FaLanguage /> },
  ];

  return (
    <section id="skills-certificates" className="skills-certificates-section">
      <div className="container py-5">
        <h2 className="text-center text-white mb-4">
          Mis conocimientos y certificados
        </h2>

        <div className="skills-container mb-5">
          <h3 className="text-white">Conocimientos</h3>
          <p className="text-white">
            Me destaco por mis habilidades en desarrollo web y por mis
            conocimientos en Ingeniería de Software, lo que incluye la capacidad
            de documentar proyectos y seguir buenas prácticas durante todo el
            ciclo de vida del desarrollo de software, manejando una amplia
            variedad de tecnologías.
          </p>
          <ul className="list-group skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="list-group-item skill-item">
                <span className="text-white skill-icon">{skill.icon} </span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="certificates-container">
          <h3 className="text-white">Certificados</h3>
          <div className="row">
            {certificates.map((certificate, index) => (
              <div key={index} className="col-md-4 certificate-card">
                <div className="card shadow-lg animate__animated animate__fadeIn">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="card-img-top certificate-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{certificate.title}</h5>
                    <p className="card-text">{certificate.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificat;
