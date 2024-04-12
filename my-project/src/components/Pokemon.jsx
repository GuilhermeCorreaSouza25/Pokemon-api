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
    <div className="flex shadow-lg shadow-black rounded-lg bg-gray-900 border-solid p-px w-50 h-20">
      <div className="flex px-0 py-1.5 rounded bg-white">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className=""
        />
      </div>
      <div className="flex flex-col justify-between p-2.5 text-center">
        <div className="flex flex-row justify-between items-center">
          <h3 className="capitalize text-white items-center justify-center ">
            {pokemon.name}
          </h3>
          <div className="text-white">#{pokemon.id}</div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="mr-2.5 capitalize text-white">
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
