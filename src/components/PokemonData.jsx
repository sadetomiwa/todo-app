import React from 'react';

export default function PokemonData({ pokemon }) {
  if (!pokemon) {
    return null;
  }

  const { name, height, weight, sprites } = pokemon;

  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={sprites.front_default} className="img-fluid rounded-start" alt={`${name} sprite`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Height: {height} decimeters
            </p>
            <p className="card-text">
              Weight: {weight} hectograms
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
