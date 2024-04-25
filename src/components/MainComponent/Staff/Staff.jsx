import React, { useEffect, useState } from 'react';

const Staff = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await resp.json();
      setPokemons(data);
    }
    getPokemons();
  }, []); // Se ejecuta la primera vez que se renderiza el componente

  return (
    <ul className="staff">
      {pokemons.length != 0 ?
        pokemons.results.map((pokemon, i) => (
          <li key={i}>
            <div>
              <span> {pokemon.name}</span>
              <a href={pokemon.url}> URL</a>
            </div>
          </li>
        ))
        : <p>carganding...</p>}
    </ul>
  );

}

export default Staff