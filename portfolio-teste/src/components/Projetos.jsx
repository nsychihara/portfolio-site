import React from "react";
import styles from "./Projetos.module.css";

const Projetos = () => {
  const projetos = [
    {
      titulo: "Projeto HBU (Hospital Beneficente Unimar)",
      descricao:
        "O projeto teve como proposta agilizar e otimizar o atendimento no hospital beneficente da Unimar. Por meio principalmente de um totem de auto-atendimento."
    },
    {
      titulo: "Automatização de controle em estufas",
      descricao:
        "Projeto feito com ESP-32 que visava controlar temperatura e umidade em uma estufa, usando sensores, etc."
    }
  ];

  return (
    <section id="projetos" className={styles.projetos}>
      <h2>Projetos</h2>
      <div className={styles.cards}>
        {projetos.map((projeto, index) => (
          <div className={styles.card} key={index}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
