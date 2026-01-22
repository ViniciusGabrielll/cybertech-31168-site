import styles from "./competidor.module.css";

type CompetidorProps = {
  cargo: string;
  imagem: string;
  nome: string;
  idade: number;
  area: string;
};

function Competidor({ cargo, imagem, nome, idade, area }: CompetidorProps) {
  return (
    <div className={styles.card}>
      <h4><span>{cargo}</span></h4>
      <img src={imagem} alt={`Foto de ${nome}`} />
      <div>
        <h4><span>Nome:</span> {nome}</h4>
        <h4><span>Idade:</span> {idade}</h4>
        <h4><span>Área:</span> {area}</h4>
      </div>
    </div>
  );
}

export default Competidor;
