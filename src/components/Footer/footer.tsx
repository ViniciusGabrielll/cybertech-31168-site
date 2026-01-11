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
          <h4>Manda um email!</h4>
          <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@gmail.com"
            />
            <label htmlFor="email">Número</label>
            <input
              type="text"
              id="numero"
              name="numero"
              placeholder="(99) 99999-9999"
            />

            <label htmlFor="motivo">Motivo</label>
            <select name="motivo">
              <option value="sugestao">FeedBack</option>
              <option value="recife">Dúvida</option>
              <option value="olinda">Proposta</option>
              <option value="jaboatao">Outro</option>
            </select>

            <label htmlFor="mensagem">Mensagem</label>
            <input type="text" id="mensagem" name="mensagem" placeholder="Mensagem"></input>
          </form>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
