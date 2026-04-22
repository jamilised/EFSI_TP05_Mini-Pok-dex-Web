import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Buscador from "./components/Buscador/Buscador";
import Filtros from "./components/Filtros/Filtros";
import ListaPokemon from "./components/ListaPokemon/ListaPokemon";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";


function App() {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarPokemon = async (valor) => {
    if (!valor) {
      setError("Ingresá un nombre o ID");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);

      if (!resultado.ok) throw new Error("No existe");

      const data = await resultado.json();

      setLista([data]);
    } catch (err) {
      setError("El Pokémon no existe");
      setLista([]);
    } finally {
      setLoading(false);
    }
  };

  const obtenerLista = async () => {
    try {
      setLoading(true);
      const resultado = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await resultado.json();

      const detalles = await Promise.all(
        data.results.map(async (p) => {
          const resultado = await fetch(p.url);
          return await resultado.json();
        })
      );

      setLista(detalles);
    } catch {
      setError("Error cargando lista");
    } finally {
      setLoading(false);
    }
  };

  const filtrarPorTipo = async (tipo) => {
    if (!tipo) return;

    try {
      setLoading(true);
      const resultado = await fetch(
        `https://pokeapi.co/api/v2/type/${tipo}`
      );
      const data = await resultado.json();

      const pokemons = data.pokemon.slice(0, 10);

      const detalles = await Promise.all(
        pokemons.map(async (p) => {
          const resultado = await fetch(p.pokemon.url);
          return await resultado.json();
        })
      );

      setLista(detalles);
    } catch {
      setError("Error al filtrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      <div className="contenedor">
        <Buscador buscarPokemon={buscarPokemon} />
        <Filtros filtrarPorTipo={filtrarPorTipo} />

        <button onClick={obtenerLista}>Cargar lista 'Primeros 10'</button>

        {loading && <Loader />}
        {error && <Error mensaje={error} />}

        <ListaPokemon lista={lista} />
      </div>
    </div>
  );
}

export default App;