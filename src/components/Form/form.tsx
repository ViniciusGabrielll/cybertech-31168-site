import { useState } from "react";
import emailJs from "@emailjs/browser";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [motivo, setMotivo] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nome === "" || email === "" || mensagem === "" || numero === "" || motivo === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      nome: nome,
      motivo: motivo,
      mensagem: mensagem,
      email: email,
      numero: numero
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
        type="email"
        name="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="email">Número</label>
      <input
        type="number"
        name="numero"
        placeholder="Digite seu número"
        onChange={(e) => setNumero(e.target.value)}
        value={numero}
      />

      <label htmlFor="motivo">Motivo</label>
      <select value={motivo} name="motivo" onChange={(e) => setMotivo(e.target.value)}>
        <option value="">Selecione o motivo</option>
        <option value="FeedBack">FeedBack</option>
        <option value="Dúvida">Dúvida</option>
        <option value="Proposta">Proposta</option>
        <option value="Outro">Outro</option>
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
  );
}

export default Form;
