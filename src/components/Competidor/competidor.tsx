type CompetidorProps = {
  imagem: string;
  nome: string;
  idade: number;
  area: string;
  expectativa: string;
};

function Competidor({ imagem, nome, idade, area, expectativa } : CompetidorProps) {
  return (
    <div>
      <img src={imagem} alt={`Foto de ${nome}`} />
      <h4>Nome: {nome}</h4>
      <h4>Idade: {idade}</h4>
      <h4>Área: {area}</h4>
      <h4>Expectativa: {expectativa}</h4>
    </div>
  );
}

export default Competidor;
