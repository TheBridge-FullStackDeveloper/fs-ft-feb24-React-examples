import React, { useEffect, useState } from 'react';
import { FidgetSpinner, Hourglass } from 'react-loader-spinner'


const Staff = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await resp.json();
       // simular retardo de llamada a API
       await new Promise((resolve, reject) => setTimeout(resolve, 2000));
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
        : 
        <>
          <p>Carganding...</p>
          <Hourglass
          visible={true}
          height="80"
          width="200"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
          />
          <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
          />
        </>
        }
    </ul>
  );

}

export default Staff