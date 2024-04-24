import React, { useEffect, useState } from 'react';

const Staff = () => {
  
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () =>{
            const resp =   await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data);
        }
        getPokemons();
    }, []); // Se ejecuta la primera vez que se renderiza el componente

    return (
      <ul>
        {pokemons.length!=0? 
          pokemons.results.map((pokemon, i) => (
              <li key={i}>
                <p> {pokemon.name}</p>
                <a href={pokemon.url}> URL</a>
              </li>
            ))
          : <p>carganding...</p>}
      </ul>
    );
    
}
 
export default Staff