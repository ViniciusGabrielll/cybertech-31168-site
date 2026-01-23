import styles from "./contato.module.css";

import Form from "../../components/Form/form";

function Contato() {
  return (
    <main>
      <section className={styles.primeiraSection}>
        <h2>Email</h2>
        <article>
          <h3>Manda a sua mensagem!</h3>
        </article>
        <div className={styles.formContainer}>
          <Form />
        </div>
      </section>

      <section className={` ${styles.formasDeContato} ultimaSection `}>
        <h2>Contato</h2>
        <article>
          <h3>Formas de contato</h3>
          <p className={styles.links}>
            <a href="https://www.instagram.com/equipe.cybertech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              Instagram: equipe.cybertech
            </a>
            <a href="https://www.instagram.com/equipe.cybertech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              Gmail: equipe.cybertech
            </a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8426918943424!2d-35.095155224991494!3d-8.117494491911843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab026573a13487%3A0x256109033e85ece5!2sSESI%20Moreno%20-%20Servi%C3%A7o%20Social%20da%20Ind%C3%BAstria!5e0!3m2!1spt-BR!2sbr!4v1769189614674!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </section>
    </main>
  );
}

export default Contato;
