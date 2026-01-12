import styles from "./footer.module.css";

import logo from "../../assets/images/logo.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";
import Form from "../Form/form";
import patrocinadores from "../../assets/images/patrocinadoresFooter.png";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} className={styles.footerLogo} />

      <section>
        <article className={styles.paginasFooter}>
          <h4>Páginas:</h4>
          <a href="" className={styles.link}>Início</a>
          <a href="" className={styles.link}>Sobre</a>
          <a href="" className={styles.link}>Contato</a>
          <a href="" className={styles.link}>Patrocinadores</a>

          <h4 className="italic">Nos Contate:</h4>
          <a href="">
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
          </a>
          <a href="">
            <img src={gmailIcon} alt="Gmail" className={styles.icon} />
          </a>
        </article>

        <article className={styles.contatoFooter}>
          <h4>Manda um email!</h4>
          <Form />
        </article>

        <article>
          <img
            src={patrocinadores}
            className={styles.footerPatrocinadores}
          ></img>
        </article>
      </section>

      <small>
        <a href="https://viniciusgabriel.netlify.app/" className={styles.link}>
          Copyright (c) 2026 Vinícius Gabriel
        </a>
      </small>
      <small>
        <a
          href="https://github.com/ViniciusGabrielll/cybertech-31168-site?tab=readme-ov-file"
          className={styles.link}
        >
          Site no github
        </a>
      </small>
    </footer>
  );
}

export default Footer;
