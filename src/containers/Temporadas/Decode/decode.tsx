import "../temporadas.css";
import styles from "./decode.module.css";

function Decode() {
  return (
    <>
      <header className={styles.header}>
        <h1>Decode</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.cyberStart}>
          <h2>CyberStart</h2>
          <article>
            <h3>CyberStart</h3>
            <p>
              O projeto visa implementar e oferecer suporte a equipes de
              robótica, atuando como uma incubadora de talentos na Região
              Metropolitana do Recife. Buscamos promover inovação e protagonismo
              juvenil, preparando estudantes para competições e projetos que
              desenvolvam habilidades tecnológicas, criativas e colaborativas.
            </p>
          </article>
          <article>
            <h3>Objetivo</h3>
            <p>
              <ul>
                <li>Implantação de equipes de robótica em escolas públicas.</li>
                <li>
                  Criação de vivências que aproximem os estudantes da
                  tecnologia.
                </li>
                <li>
                  Capacitar jovens para enfrentar os desafios do mundo
                  tecnológico.
                </li>
                <li>
                  Transformar conhecimento em soluções que geram impacto real na
                  comunidade.
                </li>
              </ul>
            </p>
          </article>
        </section>
        <section>
          <h2>Planejamento</h2>
          <article>
            <h3>Planejamento</h3>
            <p>
              Nosso planejamento prevê que, em um período de três anos
              (2025-2026-2027), o projeto ganhe amplitude e se consolide como
              uma iniciativa de grande impacto para o município de Moreno e
              outros da Região Metropolitana do Recife.
            </p>
          </article>
        </section>

        <section>
          <h2>Impactos</h2>
          <article>
            <h3>CyberExperience</h3>
            <p>
              Nos dias 29/10 e 27/11, realizamos a execução do CyberExperience
              nas escolas EREM Estadual Maria do Céu Bandeira (Moreno) e EREM
              Senador Aderbal Jurema (Jaboatão dos Guararapes). Durante essas
              visitas, apresentamos nosso projeto e realizamos uma conversa com
              as novas equipes que serão formadas em 2026. Além disso, fizemos
              demonstrações das competições FLL, OBR e FTC, destacando os
              prêmios conquistados e os benefícios da robótica para a formação
              de cidadãos preparados para os desafios do futuro.
            </p>
          </article>
        </section>

        <section>
          <h2>Impactos Esperados</h2>
          <article>
            <h3>Impactos Esperados</h3>
            <p>
              Acreditamos que, em até três anos, a criação das equipes de
              robótica nas escolas parceiras se tornará uma prática orgânica,
              incorporada ao projeto político-pedagógico. Nossa equipe
              continuará oferecendo suporte técnico e pedagógico, enquanto
              nossos alunos atuam como mentores.
            </p>
          </article>
        </section>

        <section>
          <h2>Makerting</h2>
          <article>
            <h3>Marketing e Mídias</h3>
            <p>
              Estamos presentes no Instagram e TikTok, com crescimento constante
              de cerca de 40 seguidores por mês. Em novembro de 2025, tivemos um
              aumento expressivo de +112%, evidenciando o fortalecimento do
              engajamento e da relevância do conteúdo. Para garantir
              consistência e profissionalismo, realizamos reuniões com
              especialistas em design e mídias digitais, definindo identidade
              visual, estratégias de conteúdo e padrões para as redes sociais,
              que funcionarão como vitrine para patrocinadores e parceiros.
              Desde a criação da equipe, estruturamos um departamento de
              marketing e mídias digitais, desenvolvendo uma nova identidade
              visual inspirada na equipe Cyberbot (“Lobinhos”), preservando sua
              essência, mas com uma abordagem mais moderna e alinhada aos
              desafios da FTC.
            </p>
          </article>
        </section>

        <section>
          <h2>Mecânica</h2>
          <article>
            <h3>Nosso Robô</h3>
            <p>
              O robô da equipe foi nomeado Pitoco em homenagem ao primeiro
              protótipo simples, criado com o kit iniciante. Com planejamento,
              testes e apoio de patrocinadores, o projeto evoluiu para um robô
              mais estável, funcional e criativo, mantendo o nome como símbolo
              da primeira conquista e da evolução da equipe. Ao longo da
              temporada, foram implementadas melhorias estruturais e mecânicas
              que aumentaram a estabilidade do chassi, a segurança elétrica, a
              precisão do coletor e do lançamento, além de reduzir peso e
              otimizar o desempenho geral. A equipe adotou um planejamento
              estratégico, focado na redução de custos, reaproveitamento de
              materiais, controle de qualidade e comunicação interna, garantindo
              decisões mais precisas e menos retrabalho. O desenvolvimento
              seguiu um ciclo contínuo de testes, prototipagem e validação,
              aplicando o princípio MiniMax (máxima resistência com mínimo
              material), resultando em soluções sustentáveis, eficientes e
              viáveis dentro do cronograma. As decisões finais foram
              consolidadas e documentadas no Trello, assegurando
              rastreabilidade, padronização do design e base sólida para
              melhorias futuras. Testes integrados confirmaram a eficiência do
              sistema de movimentação, coleta, odometria e estratégia autônoma e
              teleoperada, elevando a confiabilidade e competitividade do robô.
            </p>
          </article>
        </section>

        <section>
          <h2>Programção</h2>
          <article>
            <h3>Programação</h3>
            <p>
              Teleoperado: O software do robô foi desenvolvido em Java,
              aproveitando sua robustez e estrutura orientada a objetos para
              criar um código modular, reutilizável e de fácil manutenção. A
              movimentação com rodas Mecanum permite deslocamento omnidirecional
              (frontal, lateral e rotação) de forma fluida e precisa, incluindo
              um modo de velocidade reduzida para manobras delicadas. Os
              sistemas de coleta e lançamento operam de forma rápida e
              sincronizada, com ajuste de potência do lançador conforme a
              distância, garantindo maior precisão e consistência durante a
              partida. Para corrigir o desequilíbrio causado pelo peso traseiro
              do robô, foi realizada uma compensação por software, reduzindo a
              velocidade das rodas frontais e aumentando a estabilidade geral.
            </p>
            <p>
              Autônomo: No modo autônomo, utilizamos o sistema de odometria da
              goBilda, com encoders ortogonais e IMU integrada, possibilitando
              cálculos precisos de posição e orientação. O robô executa
              trajetórias confiáveis a partir de pontos de destino definidos com
              base nesses dados. Devido ao tempo limitado de testes, adotamos
              uma arquitetura modular, encapsulando ações complexas em funções
              específicas, o que facilita ajustes rápidos e seguros. Foram
              desenvolvidas duas rotinas autônomas, cada uma otimizada para uma
              posição inicial diferente na arena, garantindo flexibilidade
              estratégica e evolução contínua do sistema.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Decode;
