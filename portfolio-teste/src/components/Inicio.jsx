import styles from './Inicio.module.css';
import foto from '../../src/images/eue1.jpg'; 

function Inicio() {
  return (
    <section id="inicio" className={styles.section}>
      <div className={styles.intro}>
        <div
            className={styles.fotoPerfil}
            style={{ backgroundImage: `url(${foto})` }}></div>

        <div className={styles.textoIntro}>
          <h1>Olá, eu sou o Nicholas Ychihara</h1>
          <p> 
            Profissional DevOps apaixonado por automação e cloud. Trabalho para
            que aplicações rodem com alta performance e estabilidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
