import React, { useState } from 'react';
import { searchPokemon } from '../api';

const SearchBar = (props) => {
  const [search, setSearch] = useState('ditto');
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container flex my-3 mx-auto py-0 px-5 items-center">
      <div className="searchbar flex my-3 mx-auto py-0 px-5 items-center">
        <input
          className="flex my-3 mx-auto py-0 px-5 rounded-lg text-sm font-medium shadow-black shadow-md border-none"
          type="text"
          placeholder="buscar pokemon"
          onChange={onChangeHandler}
        ></input>
      </div>
      <button
        onClick={onButtonClickHandler}
        className="my-3 mx-auto py-3 px-5 text-sm font-medium border-none text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
