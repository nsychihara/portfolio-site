import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Competencias from "./components/Competencias";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.app}>
      <Header currentSection={currentSection} />
      <main>
        <Inicio />
        <Competencias />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
