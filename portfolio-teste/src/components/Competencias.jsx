import React from "react";
import styles from "./Competencias.module.css";

const Competencias = () => {
  const skills = ["php", "python", "docker", "git", "linux"];

  return (
    <section id="competencias" className={styles.competencias}>
      <h2>Tecnologias</h2>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill}>
            <i className={`devicon-${skill}-plain colored`} title={skill.toUpperCase()}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Competencias;
