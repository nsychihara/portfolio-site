import styles from './Competencias.module.css';

function Competencias() {
  return (
    <section id="competencias" className={styles.section}>
      <h2>Tecnologias</h2>
      <ul className={styles.skills}>
        <li><i className="devicon-php-plain colored" title="PHP"></i></li>
        <li><i className="devicon-python-plain colored" title="Python"></i></li>
        <li><i className="devicon-docker-plain colored" title="Docker"></i></li>
        <li><i className="devicon-git-plain colored" title="Git"></i></li>
        <li><i className="devicon-linux-plain colored" title="Linux"></i></li>
      </ul>
    </section>
  );
}

export default Competencias;
