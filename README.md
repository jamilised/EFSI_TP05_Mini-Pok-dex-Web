# TP05 Mini Pokédex Web

Aplicación web desarrollada con React que permite buscar y visualizar información de Pokémon consumiendo una API pública.

---

## API utilizada

Se utilizó la API: https://pokeapi.co/

---

## Endpoints utilizados

* Obtener Pokémon por nombre o ID
  https://pokeapi.co/api/v2/pokemon/{id o nombre}

* Obtener lista de Pokémon
  https://pokeapi.co/api/v2/pokemon?limit=10

* Obtener Pokémon por tipo
  https://pokeapi.co/api/v2/type/{tipo}

---

## Estructura del proyecto

```
src/
│
├── App.jsx
├── App.css
├── main.jsx
│
├── components/
│   ├── Header/
│   ├── Buscador/
│   ├── Filtros/
│   ├── ListaPokemon/
│   ├── PokemonCard/
│   ├── Loader/
│   ├── Error/
```

---

## Funcionalidades

* Búsqueda de Pokémon por nombre o ID
* Visualización de:

  * Nombre
  * Imagen
  * Tipo(s)
  * Peso
  * Altura
* Filtro por tipo de Pokémon
* Lista inicial de Pokémon
* Indicador de carga (loading)
* Manejo de errores

---

## Decisiones tomadas

* Se utilizó React para estructurar la aplicación en componentes reutilizables.
* Se centralizó la lógica en `App.jsx` para manejar el estado global.
* Se utilizó `async/await` para simplificar el manejo de promesas.
* Se separaron los componentes en carpetas individuales con su CSS correspondiente.
* Se utilizó renderizado dinámico mediante `.map()` para mostrar listas.

---

## Dificultades encontradas

* Comprender la estructura de datos (funcionamiento) de la API, especialmente en los tipos de Pokémon.
* Manejar múltiples peticiones con `Promise.all` para obtener información detallada.
* Implementar correctamente el flujo de datos entre componentes (props).
* Manejar estados como loading y errores sin romper la interfaz.

---

## Tecnologías utilizadas

* React
* JavaScript
* Fetch API
* CSS

---

## Autores

Eliel Jamilis y Morena Zalcman