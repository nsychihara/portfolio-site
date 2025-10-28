import styles from './Projetos.module.css';

function Projetos() {
  return (
    <section id="projetos" className={styles.section}>
      <h2>Projetos</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Projeto HBU (Hospital Beneficente Unimar)</h3>
          <p>
            O projeto teve como proposta agilizar e otimizar o atendimento no
            hospital beneficente da Unimar, por meio principalmente de um totem
            de autoatendimento.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Automatização de controle em estufas</h3>
          <p>
            Projeto feito com ESP-32 que visava controlar temperatura e umidade
            em uma estufa, usando sensores, etc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
