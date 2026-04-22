import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <h3>{pokemon.name}</h3>

      <img src={pokemon.sprites.front_default} />

      <p>
        Tipo:{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>

      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
    </div>
  );
};

export default PokemonCard;
