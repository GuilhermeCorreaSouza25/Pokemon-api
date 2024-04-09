import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

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

  return (
    <div className="">
      <div>
        <h1 className="flex flex-col p-4 justify-between items-center text-9xl">
          Pokedex
        </h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
          className="grid gap-2.5"
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="grid gap-3 grid-cols-3">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
