import styles from "./intoTheDeep.module.css";
import fundoIntoTheDeep from "../../../assets/images/fundoIntoTheDeep.png";
import fundacao from "../../../assets/images/Fundacao.png";
import kit from "../../../assets/images/kit.png";
import mentoria from "../../../assets/images/mentoria.png";
import robo from "../../../assets/images/roboIntoTheDeep.png";
import programacao from "../../../assets/images/programacaoIntoTheDeep.png";
import impacto from "../../../assets/images/impactoIntoTheDeep.png";

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
          <img src={kit} alt="Kit Start da Into The Deep" />
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
        <section>
          <h2>Mentoria RevAtom</h2>
          <article>
            <h3>
              Mentoria com a <span className="italic">RevAtom</span>
            </h3>
            <p>
              <ul>
                <li>
                  Objetivo da mentoria – auxiliar no desenvolvimento e adaptação
                  ao FTC.
                </li>
                <li>
                  Importância da mentoria – aprendizado acelerado e
                  fortalecimento da equipe iniciante.
                </li>
                <li>
                  Impacto na evolução – base sólida para as próximas etapas da
                  temporada.
                </li>
              </ul>
            </p>
          </article>
          <img src={mentoria} alt="Mentoria Com a RevAtom" />
        </section>
        <section>
          <h2>Mecânica do Robô</h2>
          <img src={robo} alt="Robo da Into The Deep" />
          <article>
            <h3>Mecânica do Robô</h3>
            <p className="negrito">
              Tech-Hurdle e Mecanismo das Rodas DUO Flap:
            </p>
            <p>
              Durante a criação do protótipo, foi desenvolvido o Tech-Hurdle em
              conjunto com o mecanismo das Rodas Flap DUO para aprimorar o
              sistema de intake. As Rodas Flap DUO oferecem maior tolerância e
              adaptação a diferentes variações de samples, garantindo contato
              constante durante a coleta. Após testes identificarem a queda de
              peças, o Tech-Hurdle foi implementado como um compartimento de
              segurança, mantendo os samples firmes durante a movimentação do
              robô. Essa integração resultou em maior estabilidade, eficiência e
              confiabilidade no processo de coleta.
            </p>
          </article>
        </section>
        <section>
          <h2>Programação do Robô</h2>
          <article>
            <h3>Programação do Robô</h3>
            <p>
              A programação do robô foi desenvolvida em Java, com foco em
              desempenho, precisão e adaptabilidade. Implementamos rotas
              planejadas para o modo autônomo, garantindo movimentos confiáveis
              e execução estratégica das tarefas. No modo teleoperado, o sistema
              oferece controles personalizáveis, permitindo maior domínio do
              robô durante as partidas. Além disso, a telemetria em tempo real
              possibilita ajustes rápidos e tomada de decisões mais eficientes,
              contribuindo para um melhor desempenho em competição.
            </p>
          </article>
          <img src={programacao} alt="Como funciona a Programação do robô" />
        </section>
        <section className="ultimaSection">
          <h2>Impacto</h2>
          <img src={impacto} alt="Caixas de EV3 doadas" />
          <article>
            <h3>Impacto</h3>
            <p className="negrito">Projeto CyberStart:</p>
            <p>
              Promovemos a robótica de competição em escolas públicas de Moreno,
              com a entrega de maletas de robótica à Secretaria de Educação e
              ações voltadas ao incentivo de jovens no universo da tecnologia.
              Nosso compromisso é expandir esse impacto no futuro, levando mais
              kits, técnicos e mentores para fortalecer a prática da robótica.
              Paralelamente, buscamos o fortalecimento de patrocínios, a
              expansão do programa FIRST e o desenvolvimento de parcerias com
              empresas.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default IntoTheDeep;
