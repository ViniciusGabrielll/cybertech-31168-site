import styles from "./headerSobre.module.css";

function HeaderSobre() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.textsContainer}>
        <div className={styles.quadradoCinza}></div>
        <h1>Sobre nós</h1>
        <p>
          No dia 29 de maio de 2025, ao final da temporada INTO THE DEEP, a
          equipe deu início à sua jornada no programa FIRST® Tech Challenge
          (FTC). Desde então, passou a estudar e aplicar os valores da FIRST®,
          assumindo como missão promover o desenvolvimento de habilidades em
          educação tecnológica e competências pessoais. Essa atuação está
          organizada em cinco eixos estratégicos, que orientam todas as ações do
          grupo e reforçam seu compromisso com a inovação, a colaboração e o
          impacto positivo na comunidade.
        </p>
      </div>
    </header>
  );
}

export default HeaderSobre;
