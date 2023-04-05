import React, { useEffect, useState } from 'react'
import PokemonData from '../components/PokemonData'
import PokemonFinder from '../components/PokemonFinder'

export default function PokemonDisplay() {
  const [pokemon, setPokemon] = useState(null)
  const [pokemonName, setPokemonName] = useState('')
  
  useEffect(() => {
    if (!pokemonName) {
      setPokemon(null);
      return;
    }
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokemon(data)
      })
      .catch(error => {
        console.log(error);
        setPokemon(null);
      });
  }, [pokemonName]);

  return (
    <div>
      <h1 className='text-center'>PokeDEX</h1>
      <PokemonFinder pokemonName={pokemonName} setPokemonName={setPokemonName} />
      {pokemon ? <PokemonData pokemon={pokemon} /> : null}
    </div>
  )
}
