import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";

function Home() {
  return (
    <>
      <NavBar />
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <section>
          <h2>FIRST</h2>
          <img src="./src/assets/images/imagem" alt="Imagem FTC" />
          <article>
            <h3>O que é a FTC</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus inventore vero assumenda voluptatibus dolor pariatur
              ipsa recusandae vel facere animi voluptate magni dolores est
              veritatis repellendus, cum adipisci in placeat?
            </p>
          </article>
          <img
            src=""
            alt="Imagem de um competidor segurando o robô"
          />
        </section>
        <section>
          <h2>Sobre</h2>
          <article>
            <h3>Quem somos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              veritatis at? Quasi provident voluptatem quam debitis doloribus
              exercitationem accusamus maxime saepe aspernatur sapiente, laborum
              nam tenetur quidem sed porro unde!
            </p>
            <Button link="" text="Saiba mais" />
          </article>
          <img
            src=""
            alt="Equipe junta e pilotos analisando o jogo"
          />
        </section>
        <section>
          <h2>Cyber Experience</h2>
          <article>
            <h3>CYBERSTART</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nesciunt commodi saepe unde! Nihil quod, natus dolor
              veniam et iusto rem cumque quam. Alias ducimus ipsum consequatur
              dolorum magni. Libero.
            </p>
          </article>
          <article>
            <h3>IMPACTO</h3>
            <div>
              <img
                src=""
                alt="Impacto em pernambuco"
              />
              <img
                src=""
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, veniam, dolor nulla aspernatur quos provident atque
              sed delectus ratione pariatur dolore accusamus inventore alias
              necessitatibus corporis eos laboriosam fugit doloribus?
            </p>
            <Button link="" text="Saiba mais" />
          </article>
          <img
            src="./src/assets/images/imagem"
            alt="Temporadas que participamos"
          />
        </section>
        <section>
          <h2>Patrocinadores</h2>
          <article>
            <h3>Patrocinadores</h3>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi sapiente itaque quisquam quos aut sed, harum nemo
                  neque enim saepe reprehenderit, nisi consequuntur eos.
                  Molestias ratione soluta provident aspernatur doloremque!
                </p>
                <div>
                  <Button link="" text="Saiba mais" />
                  <Button link="" text="Tornar-se um Patrocinador" />
                </div>
              </div>
              <img
                src=""
                alt="Nossos Patrocinadores"
              />
            </div>
          </article>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default Home;