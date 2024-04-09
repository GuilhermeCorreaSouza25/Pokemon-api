import React, { useState } from 'react';

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
    <div className="flex my-3 mx-2 py-0 px-5 items-center">
      <div className="flex my-3 mx-5 py-0 px-5 items-center ">
        <textarea
          cols={100}
          rows={1}
          className="flex my-3 mx-auto p-2.5 rounded-lg text-sm font-medium shadow-black shadow-md border-none text-left"
          placeholder="buscar pokemon"
          onChange={onChangeHandler}
        ></textarea>
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
