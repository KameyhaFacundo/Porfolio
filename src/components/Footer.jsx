import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Facundo Kameyha.
        </p>
        <br />
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
