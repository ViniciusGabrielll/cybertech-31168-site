import { useState } from "react";

function Form() {
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

    alert("TESTE");
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
  );
}

export default Form;
