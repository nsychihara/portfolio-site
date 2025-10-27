import React from "react";
import styles from "./Header.module.css";

const Header = ({ currentSection }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Portfólio Teste: Nicholas S. Ychihara</div>
        <ul className={styles.navLinks}>
          {["inicio", "competencias", "projetos", "contato"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={currentSection === section ? styles.active : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
