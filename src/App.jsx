import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificat from "./components/Certificat";
import Contact from "./components/Contact";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificat />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
