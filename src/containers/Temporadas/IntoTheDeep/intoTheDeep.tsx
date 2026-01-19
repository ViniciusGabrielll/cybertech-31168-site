import styles from "./intoTheDeep.module.css";
import fundoIntoTheDeep from "../../../assets/images/fundoIntoTheDeep.png";
import fundacao from "../../../assets/images/Fundacao.png";

function IntoTheDeep() {
  return (
    <>
      <header className={styles.header}>
        <h1>IntoTheDeep</h1>
        <div className={styles.ondas} />
        <div className={styles.rastroOnda} />
        <img src={fundoIntoTheDeep} className={styles.fundoHeader} />
      </header>
      <main className={styles.main}>
        <div className={styles.timeLine}></div>
        <section>
          <h2>Fundação da equipe</h2>
          <span className={styles.timeText}>Maio</span>
          <article>
            <h3>
              Fundação da <span className="italic">Equipe</span>
            </h3>
            <p>
              A equipe foi criada em 2025, logo após a temporada INTO THE DEEP,
              recebemos a missão de estrear na FTC. Com esse compromisso em
              mãos, para promover e formação dos membros da nossa equipe
              consideramos cinco eixos:
              <ul>
                <li>Comunicação</li>
                <li>Inovação</li>
                <li>Domínio tecnológico</li>
                <li>Desempenho de notas</li>
                <li>Criatividade</li>
              </ul>
            </p>
            <p>
              No dia 29 de maio, iniciaram estudos sobre a competição,
              planejamento de metas, ações sociais e organização de cargos.{" "}
            </p>
          </article>
          <img src={fundacao} />
        </section>
        <section>
          <h2>Recebimento do KIT</h2>
          <span className={styles.timeText}>Junho</span>
          <article>
            <h3>Recebimento do KIT</h3>
            <p>
              O Kit Starter foi recebido no dia 15 de junho e, a partir desse
              momento, os primeiros passos da equipe consistiram na busca por
              apoio e orientações, fundamentais para dar início às atividades e
              estruturar o desenvolvimento do projeto.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default IntoTheDeep;
