import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Portfólio Teste: Nicholas Ychihara</div>
        <ul className={styles.navLinks}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#competencias">Competências</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
