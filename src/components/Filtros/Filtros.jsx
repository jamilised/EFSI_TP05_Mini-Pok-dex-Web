import "./Filtros.css";

const Filtros = ({ filtrarPorTipo }) => {
  return (
    <div className="filtros">
      <select onChange={(e) => filtrarPorTipo(e.target.value)}>
        <option value="">Filtrar por tipo</option>
        <option value="fire">fire</option>
        <option value="water">water</option>
        <option value="grass">grass</option>
        <option value="electric">electric</option>
      </select>
    </div>
  );
};

export default Filtros;