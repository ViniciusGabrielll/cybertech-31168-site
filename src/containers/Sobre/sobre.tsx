import HeaderSobre from "./HeaderSobre/headerSobre";

function Sobre() {
  return (
    <>
      <HeaderSobre />
      <main>
        <section>
          <h2>Sobre</h2>
          <article>
            <h3>A nossa <span className="red">Equipe</span></h3>
            <p>
              Somos uma equipe do SESI Moreno, composta por 15 estudantes, 2
              mentores e 2 técnicos, e vivemos nossa primeira temporada
              no desafio DECODE 2025-2026. Nesta jornada, apresentamos nosso site,
              que reflete nossos caminhos, desafios, estratégias, processos de
              construção e expectativas para o futuro. Cada passo representa
              nosso compromisso com a inovação, a aprendizagem colaborativa e a
              aplicação dos valores da FIRST®, fortalecendo nossa missão de
              transformar conhecimento em impacto positivo.
            </p>
            <p></p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Sobre;
