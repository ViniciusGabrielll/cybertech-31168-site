import styles from "./footer.module.css";

import logo from "../../assets/images/logo.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";
import { useState } from "react";

function Footer() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos");
      return;
    }

    alert("TESTE")
  }

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
          <form onSubmit={sendEmail}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="email">Número</label>
            <input
              type="text"
              name="numero"
              placeholder="Digite seu número"
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
            />

            <label htmlFor="motivo">Motivo</label>
            <select name="motivo">
              <option value="sugestao">FeedBack</option>
              <option value="recife">Dúvida</option>
              <option value="olinda">Proposta</option>
              <option value="jaboatao">Outro</option>
            </select>

            <label htmlFor="mensagem">Mensagem</label>
            <input
              type="text"
              name="mensagem"
              placeholder="Mensagem"
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
            />

            <input type="submit" value="Enviar" />
          </form>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
