import styles from "./home.module.css";
import Button from "../../components/Button/button";
import First from "../../assets/images/First.png";
import FTCSobreImg from "../../assets/images/OQueEFTC.png";
import quemSomos from "../../assets/images/QuemSomos.png";
import cyberExperiencePernambuco from "../../assets/images/cyberExperiencePernambuco.png";
import cyberExperienceEscolas from "../../assets/images/cyberExperienceEscolas.png";
import temporadasImg from "../../assets/images/temporadasImg.png";
import patrocinadoresImg from "../../assets/images/patrocinadores.png";
import Header from "./Header/header";
import redirectIcon from "../../assets/images/icons/redirect.png";

function Home() {
  return (
    <>
      <Header />
      <main>
        <img src={First} alt="Imagem FTC" className={styles.First} />
        <section>
          <h2>FIRST</h2>
          <article>
            <h3>
              O que é a <span className="italic red">FTC</span>
            </h3>
            <p>
              A FIRST® Tech Challenge (FTC) é uma competição internacional de
              robótica para estudantes do ensino médio, na qual equipes
              projetam, constroem e programam robôs para enfrentar desafios
              anuais. Mais do que tecnologia, a FTC promove trabalho em equipe,
              inovação, pensamento crítico e impacto positivo na comunidade,
              sempre guiada pelos valores da FIRST®.
            </p>
          </article>
          <img
            src={FTCSobreImg}
            alt="Imagem de um competidor segurando o robô"
          />
        </section>
        <section>
          <h2>Sobre</h2>
          <img src={quemSomos} alt="Equipe junta e pilotos analisando o jogo" />
          <article>
            <h3>
              <span className="red">Quem</span>{" "}
              <span className="italic">somos</span>
            </h3>
            <p>
              Somos uma equipe de robótica do SESI Moreno que iniciou sua
              trajetória no programa FIRST® Tech Challenge (FTC) em 29 de maio
              de 2025, após a temporada Into the Deep. Vivemos nossa primeira
              temporada no desafio DECODE, movidos pelos valores da FIRST®, que
              orientam nossas ações e nossa forma de aprender, colaborar e
              inovar. Nossa equipe é composta por 15 estudantes, 2 mentores e 2
              técnicos, unidos pelo propósito de desenvolver habilidades em
              educação tecnológica, pensamento crítico e competências pessoais.
              Organizamos nossa atuação em eixos estratégicos que fortalecem
              nosso compromisso com a inovação, o trabalho em equipe e o impacto
              positivo na comunidade.
            </p>
            <Button link="/sobre" text="Sobre nós" icon={redirectIcon} />
          </article>
        </section>
        <section className={styles.cyberExperienceContainer}>
          <h2>Cyber Experience</h2>
          <article>
            <h3 className="italic">CYBERSTART</h3>
            <p>
              O projeto visa implementar e oferecer suporte a equipes de
              robótica, atuando como uma incubadora de talentos na Região
              Metropolitana do Recife e em Moreno. Buscamos promover inovação e protagonismo
              juvenil, preparando estudantes para competições e projetos que
              desenvolvam habilidades tecnológicas, criativas e colaborativas.
            </p>
          </article>
          <article>
            <h3>IMPACTO</h3>
            <div className={styles.impactoContainer}>
              <img
                src={cyberExperiencePernambuco}
                alt="Impacto em pernambuco"
              />
              <img
                src={cyberExperienceEscolas}
                alt="Impacto nas escolas e pessoas"
              />
            </div>
          </article>
        </section>
        <section>
          <h2>Temporadas</h2>
          <article>
            <h3>Temporadas</h3>
            <p>
              Nossa trajetória na FIRST® Tech Challenge (FTC) começou com a
              participação no off-season da temporada Into the Deep, que marcou
              nosso primeiro contato com a robótica competitiva e com os valores
              da FIRST®. Essa experiência foi fundamental para o aprendizado
              inicial, integração da equipe e desenvolvimento das primeiras
              habilidades técnicas e colaborativas. Na temporada seguinte,
              participamos do desafio DECODE, que representou um passo
              importante na consolidação da equipe, no aprimoramento técnico e
              no fortalecimento do trabalho em equipe. Cada temporada contribuiu
              para nossa evolução, ampliando nosso conhecimento, nossa visão de
              futuro e nosso compromisso com a inovação e o impacto positivo na
              comunidade.
            </p>
            <div className="buttonsContainer">
              <Button link="/temporadas/intoTheDeep" text="Into The Deep" icon={redirectIcon} />
              <Button link="/temporadas/decode" text="Decode" icon={redirectIcon} />
            </div>
          </article>
          <img src={temporadasImg} alt="Temporadas que participamos" />
        </section>
        <section className="ultimaSection">
          <h2>Patrocinadores</h2>
          <img src={patrocinadoresImg} alt="Nossos Patrocinadores" />
          <article>
            <h3 className="red">Patrocinadores</h3>
            <div>
              <div>
                <p>
                  Nesta primeira temporada, contamos com o apoio de grandes
                  parceiros que acreditam no potencial da nossa equipe. Juntos,
                  estamos promovendo não apenas a evolução técnica e o
                  aprimoramento em programação, mas também ampliando o impacto
                  social do nosso projeto. Cada parceiro desempenha um papel
                  essencial para que possamos alcançar nossos objetivos e
                  transformar ideias em resultados. É graças a essa colaboração
                  que conseguimos avançar, inovar e inspirar.
                </p>
                <div className="buttonsContainer">
                  <Button
                    link="/contato"
                    text="Tornar-se Patrocinador"
                    icon={redirectIcon}
                  />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
