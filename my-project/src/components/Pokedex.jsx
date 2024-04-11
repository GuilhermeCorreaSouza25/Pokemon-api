import React, { useContext } from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import FavoriteContext from '../contexts/favoritesContext';

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <div className="">
      <div className="flex justify-evenly text-9xl">
        <div className="pb-5 text-white">
          {favoritePokemons.length} ❤️ Favoritos
        </div>
      </div>
      {loading ? (
        <div className="flex text-white font-bold">Carregando...</div>
      ) : (
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
      <div className="pt-3">
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
          className="grid gap-2.5"
        />
      </div>
    </div>
  );
};

export default Pokedex;
