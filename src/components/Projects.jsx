import React from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Pedidos",
      description:
        "Proyecto que consiste en una aplicación para que los clientes de un restaurante elijan entre distintos productos y puedan hacer su pedido🍕☕",
      image: "/images/pedidosRolling.png",
      link: "https://pedidos-frontend-rolling.vercel.app/",
    },
    {
      title: "Ecommerce Gamer",
      description:
        "Aplicación para que los clientes puedan realizar su compra de juegos.",
      image: "/images/ecommerGamer.png",
      link: "https://github.com/KameyhaFacundo/Ecommerce-gamer",
    },
    {
      title: "Base de datos para sistema de salud pública",
      description:
        "Gestión del Sistema de Salud Pública para COVID-19. Tecnología de control de la salud poblacional (2021).",
      image: "/images/BD_saludPub.png",
      link: "https://github.com/KameyhaFacundo/BaseDatos-Sistema-salud-publica",
    },
    {
      title: "Documentacion de base de datos, sistema de repuestos",
      description:
        "Gestion de gestion para un local de repuestos de automoviles.",
      image: "/images/kcrepuestos.png",
      link: "https://github.com/KameyhaFacundo/Ingenieria-en-software-KCrepuestos",
    },
    {
      title: "Base de datos para sistema de veterinaria",
      description: "Sistema de destion de stock, usuarios, mascotas y turnos.",
      image: "/images/veterinaria.png",
      link: "https://github.com/KameyhaFacundo/Sistema-de-Veterinaria",
    },
    {
      title: "Counter Bugs - Netlogo, Inteligencia Artificial",
      description:
        "Trabajo Final integrador - Inteligencia Artificial con Netlogo , este proyecto realiza un conteo y clasificacion de insectos en un Sticktrap.",
      image: "/images/netlogo.png",
      link: "https://github.com/KameyhaFacundo/Counter-Bugs-IA-Netlogo",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="text-center text-white py-4">Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
