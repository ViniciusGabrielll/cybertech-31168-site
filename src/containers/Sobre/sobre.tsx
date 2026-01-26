import styles from "./sobre.module.css";

import HeaderSobre from "./HeaderSobre/headerSobre";
import Competidor from "../../components/Competidor/competidor.tsx";

import hibson from "../../assets/images/Competidores/hibson.png";
import isaque from "../../assets/images/Competidores/isaque.png";
import kauan from "../../assets/images/Competidores/kauan.png";
import renato from "../../assets/images/Competidores/renato.png";
import ruth from "../../assets/images/Competidores/ruth.png";
import vinicius from "../../assets/images/Competidores/vinicius.png";
import augusto from "../../assets/images/Competidores/augusto.png";
import radames from "../../assets/images/Competidores/radames.png";

import objetivo from "../../assets/images/objetivo.png";

function Sobre() {
  return (
    <>
      <HeaderSobre />
      <main>
        <section className="backgroundRed">
          <h2>Sobre</h2>
          <article>
            <h3>
              <span className="gray">Nossa</span> Equipe
            </h3>
            <p>
              Somos uma equipe do SESI Moreno, composta por 15 estudantes, 2
              mentores e 2 técnicos, e vivemos nossa primeira temporada no
              desafio DECODE 2025-2026. Nesta jornada, apresentamos nosso site,
              que reflete nossos caminhos, desafios, estratégias, processos de
              construção e expectativas para o futuro. Cada passo representa
              nosso compromisso com a inovação, a aprendizagem colaborativa e a
              aplicação dos valores da FIRST®, fortalecendo nossa missão de
              transformar conhecimento em impacto positivo.
            </p>
            <p></p>
          </article>
        </section>
        <section className={styles.competidores}>
          <Competidor
            cargo="Competidor"
            imagem={hibson}
            nome="Hibson Luiz"
            idade={17}
            area="Programador"
          />
          <Competidor
            cargo="Competidor"
            imagem={isaque}
            nome="Isaque Melo"
            idade={16}
            area="Mecânico"
          />
          <Competidor
            cargo="Competidor"
            imagem={kauan}
            nome="Kauan Miguel"
            idade={16}
            area="Programador"
          />
          <Competidor
            cargo="Competidor"
            imagem={renato}
            nome="Renato Wanderson"
            idade={17}
            area="CAD"
          />
          <Competidor
            cargo="Competidor"
            imagem={ruth}
            nome="Ruth Vitória"
            idade={16}
            area="AE"
          />
          <Competidor
            cargo="Competidor"
            imagem={vinicius}
            nome="Vinícius Gabriel"
            idade={16}
            area="Programador"
          />
          <Competidor
            cargo="Técnico"
            imagem={augusto}
            nome="Augusto Guerra"
            idade={32}
            area="Professor de Geografia e Robótica; Mestre em Educação Tecnológica."
          />
          <Competidor
            cargo="Técnico"
            imagem={radames}
            nome="José Radamés"
            idade={40}
            area="Professor de Matemática; Dr. em Biociência Animal."
          />
        </section>
        <section className="ultimaSection">
          <h2>Objetivo</h2>
          <article>
            <h3 className="italic">Objetivo da Equipe</h3>
            <p>
              Trabalhamos para fortalecer a educação tecnológica através da
              robótica, motivando jovens e gerando inovação, crescimento e
              impacto positivo inspirados nos valores da FIRST®. Nosso objetivo
              é alcançar resultados expressivos e superar cada novo desafio.
              <ul>
                <li>Implantação de equipes de robótica em escolas públicas.</li>
                <li>
                  Capacitar jovens para enfrentar os desafios do mundo
                  tecnológico.
                </li>
                <li>
                  Criação de vivências que aproximem os estudantes da
                  tecnologia.
                </li>
                <li>
                  Transformar conhecimento em soluções que geram impacto real na
                  comunidade.
                </li>
              </ul>
            </p>
          </article>
          <img src={objetivo} alt="CyberStart em ação" />
        </section>
      </main>
    </>
  );
}

export default Sobre;
