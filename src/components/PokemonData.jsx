import React from 'react';

export default function PokemonData({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  const { name, height, weight, sprites, abilities } = pokemon;
  const abilitiesList = abilities.map(ability => ability.ability.name);
  

  return (
    <div className="card mb-3 mt-3" style={{ maxWidth: 650 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={sprites.front_default} className="img-fluid rounded-start" alt={`${name} sprite`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name.toUpperCase()}</h5>
            <p className="card-text">Height: {height}</p>
            <p className="card-text">Weight: {weight}</p>
            <ul className="list-group list-group-flush">
              <h5 className="card-title">ABILITIES:</h5>
                {abilitiesList.map(ability => <li key={ability}>{ability}</li>)}
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}
