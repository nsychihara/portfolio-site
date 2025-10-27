import React from "react";
import styles from "./Inicio.module.css";
import foto from "../images/eue1.jpg";

const Inicio = () => {
  return (
    <section id="inicio" className={styles.inicio}>
      <div className={styles.intro}>
        <img src={foto} alt="Minha Foto" className={styles.fotoPerfil} />
        <div className={styles.textoIntro}>
          <h1>Olá, eu sou o Nicholas Ychihara</h1>
          <p>
            Profissional DevOps apaixonado por automação e cloud. Trabalho para
            que aplicações rodem com alta performance e estabilidade. Bem-vindo
            ao meu portfólio!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
