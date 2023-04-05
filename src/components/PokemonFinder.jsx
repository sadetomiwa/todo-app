import React from 'react'

export default function PokemonFinder({ pokemonName, setPokemonName }) {
  function handleClick(e) {
    e.preventDefault();
    let pokemon = e.target.pokemon.value;
    let newPokemonName = pokemon.toLowerCase(); 
    setPokemonName(newPokemonName);
    e.target.reset();
  };

  return (
    <form action="" onSubmit={handleClick}>
      <h1 className=''>Pokemon Puller</h1>
      <div className="form w-50">
        {/* <label htmlFor="task">Task</label> */}
        <input className="form-control" type="text" name="pokemon" placeholder='Enter Pokemon' />
        <input type="submit" value="Add Pokemon" className='btn btn-outline-warning w-100 mt-3' />
      </div>
    </form>
  )
};
