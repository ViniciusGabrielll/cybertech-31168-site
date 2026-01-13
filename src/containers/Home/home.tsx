import styles from "./home.module.css";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";
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
      <NavBar />
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus inventore vero assumenda voluptatibus dolor pariatur
              ipsa recusandae vel facere animi voluptate magni dolores est
              veritatis repellendus, cum adipisci in placeat?Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Temporibus inventore vero
              assumenda voluptatibus dolor pariatur ipsa recusandae vel facere
              animi voluptate magni dolores est veritatis repellendus, cum
              adipisci in placeat?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              veritatis at? Quasi provident voluptatem quam debitis doloribus
              exercitationem accusamus maxime saepe aspernatur sapiente, laborum
              nam tenetur quidem sed porro unde!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis, veritatis at? Quasi provident
              voluptatem quam debitis doloribus exercitationem accusamus maxime
              saepe aspernatur sapiente, laborum nam tenetur quidem sed porro
              undeLorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis, veritatis at? Quasi provident voluptatem quam debitis
              doloribus exercitationem accusamus maxime saepe aspernatur
              sapiente, laborum nam tenetur quidem sed porro unde
            </p>
            <Button link="" text="Sobre nós" icon={redirectIcon} />
          </article>
        </section>
        <section className={styles.cyberExperienceContainer}>
          <h2>Cyber Experience</h2>
          <article>
            <h3 className="italic">CYBERSTART</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, veniam, dolor nulla aspernatur quos provident atque
              sed delectus ratione pariatur dolore accusamus inventore alias
              necessitatibus corporis eos laboriosam fugit doloribus?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Blanditiis, veniam,
              dolor nulla aspernatur quos provident atque sed delectus ratione
              pariatur dolore accusamus inventore alias necessitatibus corporis
              eos laboriosam fugit doloribus?
            </p>
            <div className="buttonsContainer">
              <Button link="" text="Into The Deep" icon={redirectIcon} />
              <Button link="" text="Decode" icon={redirectIcon} />
            </div>
          </article>
          <img src={temporadasImg} alt="Temporadas que participamos" />
        </section>
        <section>
          <h2>Patrocinadores</h2>
          <img src={patrocinadoresImg} alt="Nossos Patrocinadores" />
          <article>
            <h3 className="red">Patrocinadores</h3>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi sapiente itaque quisquam quos aut sed, harum nemo
                  neque enim saepe reprehenderit, nisi consequuntur eos.
                  Molestias ratione soluta provident aspernatur doloremque!Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                  sapiente itaque quisquam quos aut sed, harum nemo neque enim
                  saepe reprehenderit, nisi consequuntur eos. Molestias ratione
                  soluta provident aspernatur doloremque!
                </p>
                <div className="buttonsContainer">
                  <Button link="" text="Saiba mais" icon={redirectIcon} />
                  <Button
                    link=""
                    text="Tornar-se Patrocinador"
                    icon={redirectIcon}
                  />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;