import styles from './Contato.module.css';

function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <h2>Contato</h2>
      <p>
        Entre em contato comigo através do e-mail: <strong>nychihara@gmail.com</strong>
      </p>
      <div className={styles.social}>
        <a href="https://github.com/nsychihara" target="_blank" title="GitHub"><i className="fab fa-github fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/nicholas-ychihara/" target="_blank" title="LinkedIn"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="https://www.instagram.com/nsychihara/" target="_blank" title="Instagram"><i className="fab fa-instagram fa-2x"></i></a>
      </div>
    </section>
  );
}

export default Contato;
