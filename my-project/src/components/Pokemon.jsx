import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? '❤️' : '🖤';
  return (
    <div className="pokemon-card flex shadow-lg shadow-black rounded">
      <div className="pokemon-image-container px-0 py-1.5">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image w-16  h-16 mx-2.5"
        />
      </div>
      <div className="flex flex-col justify-between p-2.5">
        <div className="flex flex-row justify-between items-center">
          <h3 className="capitalize"> {pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="mr-2.5 capitalize">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button
            className="border-none shadow-black	p-1 cursor-pointer items-center"
            onClick={onHeartClick}
          >
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
