import { useState } from "react";
import emailJs from "@emailjs/browser";
import styles from "./form.module.css";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [motivo, setMotivo] = useState("");

  function formatarTelefone(valor: string) {
  return valor
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
}

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      nome === "" ||
      email === "" ||
      mensagem === "" ||
      numero === "" ||
      motivo === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      nome: nome,
      motivo: motivo,
      mensagem: mensagem,
      email: email,
      numero: numero,
    };

    emailJs
      .send(
        "service_o7ooogj",
        "template_s7v3jsd",
        templateParams,
        "nz3gLrLYCePlYiNw6"
      )
      .then(
        (response) => {
          alert(
            "EMAIL ENVIADO! Iremos responder no seu número ou email assim que possível! Agradecemos a mensagem!"
          );
          setNome("");
          setEmail("");
          setMensagem("");
          setNumero("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <form onSubmit={sendEmail} className={styles.form}>
      <div className={styles.informacoes}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="email">Número</label>
          <input
            type="tel"
            name="numero"
            placeholder="(99) 99999-9999"
            onChange={(e) => setNumero(formatarTelefone(e.target.value))}
            value={numero}
          />
        </div>
        <div>
          <label htmlFor="motivo">Motivo</label>
          <select
            value={motivo}
            name="motivo"
            onChange={(e) => setMotivo(e.target.value)}
          >
            <option value="">Selecione o motivo</option>
            <option value="FeedBack">FeedBack</option>
            <option value="Dúvida">Dúvida</option>
            <option value="Proposta">Proposta</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
          className={styles.mensagem}
        />
      </div>

      <input type="submit" value="Enviar" className={styles.enviar}/>
    </form>
  );
}

export default Form;
