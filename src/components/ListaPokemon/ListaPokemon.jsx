import "./ListaPokemon.css";
import PokemonCard from "../PokemonCard/PokemonCard";

const ListaPokemon = ({ lista }) => {
  return (
    <div className="lista">
      {lista.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};



export default ListaPokemon;