import styles from "./footer.module.css";

import logo from "../../assets/images/logo.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";
import Form from "../Form/form";
import patrocinadores from "../../assets/images/patrocinadoresFooter.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} className={styles.footerLogo} />

      <section>
        <article className={styles.paginasFooter}>
          <h4>Páginas:</h4>
          <NavLink to="/" className={styles.link}>
            Início
          </NavLink>
          <NavLink to="/sobre" className={styles.link}>
            Sobre
          </NavLink>
          <NavLink to="/contato" className={styles.link}>
            Contato
          </NavLink>
          <NavLink to="/temporadas/intoTheDeep" className={styles.link}>
            Into The Deep
          </NavLink>
          <NavLink to="/temporadas/decode" className={styles.link}>
            Decode
          </NavLink>

          <h4 className="italic">Nos Contate:</h4>
          <a href="https://www.instagram.com/equipe.cybertech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
            <p>equipe.cybertech</p>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=equipecybertechftc@gmail.com">
            <img src={gmailIcon} alt="Gmail" className={styles.icon} />
            <p>equipecybertechftc@gmail.com</p>
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
