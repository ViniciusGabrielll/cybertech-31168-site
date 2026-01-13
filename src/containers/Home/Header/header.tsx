import Button from "../../../components/Button/button";
import styles from "./header.module.css";
import instagramIcon from "../../../assets/images/icons/InstagramPuro.png";
import redirectIcon from "../../../assets/images/icons/redirect.png";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.textsContainer}>
        <div className={styles.titleContainer}>
          <div>
            <h1 className="italic">CYBER</h1>
            <h1>TECH</h1>
          </div>
          <h1 className={styles.idEquipe}>#31168</h1>
        </div>

        <p className={styles.textHeader}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptatem accusantium velit rerum beatae voluptatibus minus, aut at,
          atque porro perferendis quod odio. Pariatur harum blanditiis numquam
          laboriosam natus cum.
        </p>

        <div className={styles.buttonsContainer}>
          <Button link="" text="Sobre nós" icon={redirectIcon} />
          <Button link="" text="Instagram" icon={instagramIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
