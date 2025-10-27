import React from "react";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section id="contato" className={styles.contato}>
      <h2>Contato</h2>
      <p>
        Entre em contato comigo através do e-mail: <strong>nychihara@gmail.com</strong>
      </p>
      <div className={styles.social}>
        <a href="#" target="_blank" title="GitHub"><i className="fab fa-github fa-2x"></i></a>
        <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="#" target="_blank" title="Instagram"><i className="fab fa-instagram fa-2x"></i></a>
      </div>
    </section>
  );
};

export default Contato;
