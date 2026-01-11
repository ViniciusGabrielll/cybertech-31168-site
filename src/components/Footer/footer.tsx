import styles from "./footer.module.css";

import logo from "../../assets/images/logo.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} className={styles.footerLogo} />

      <section>
        <article>
          <h4>Páginas:</h4>
          <a href="">Início</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
          <a href="">Patrocinadores</a>

          <h4 className="italic">Nos Contate:</h4>
          <a href="">
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a href="">
            <img src={gmailIcon} alt="Gmail" className={styles.icon} />
          </a>
        </article>

        <article>
          <form>
            <label htmlFor="nome"></label>
            <input type="text" name="nome">
              Seu nome
            </input>
          </form>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
