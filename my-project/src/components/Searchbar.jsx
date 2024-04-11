import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="my-3 mx-2 py-0 px-5 items-center justify-center flex">
      <div className="flex my-3 mx-5 py-0 px-5">
        <input
          type="text"
          id="error"
          className="my-3 mx-auto p-2.5 rounded-lg text-sm font-medium shadow-black shadow-md border-none text-left w-96 justify-center"
          placeholder="buscar pokemon"
          onChange={onChangeHandler}
        ></input>
        <button
          onClick={onButtonClickHandler}
          className="text-white ml-2 justify-center items-center text-center"
        >
          <BiSearchAlt size={25} />
          Buscar
        </button>
      </div>
      {/* <button
        onClick={onButtonClickHandler}
        className="my-3 mx-auto py-3 px-5 text-sm font-medium border-none text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex"
      >
        Buscar
      </button> */}
    </div>
  );
};

export default SearchBar;
