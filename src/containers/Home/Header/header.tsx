import Button from "../../../components/Button/button";
import styles from "./header.module.css";
import redirectIcon from "../../../assets/images/icons/redirect.png";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.textsContainer}>
        <div className={styles.quadradoVermelho}></div>
        <div className={styles.titleContainer}>
          <div>
            <h1 className="italic">CYBER</h1>
            <h1>TECH</h1>
          </div>
          <h1 className={styles.idEquipe}>#31168</h1>
        </div>

        <p className={styles.textHeader}>
          Cyber Tech é uma equipe de robótica do SESI Moreno que compete na
          FIRST® Tech Challenge, unindo tecnologia, inovação e trabalho em
          equipe para transformar conhecimento em impacto positivo.
        </p>

        <div className="buttonsContainer">
          <Button link="/sobre" text="Sobre nós" icon={redirectIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
