import "./Buscador.css";
import { useState } from "react";

const Buscador = ({ buscarPokemon }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    buscarPokemon(input.toLowerCase());
  };

  return (
    <form className="buscador" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre o ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;