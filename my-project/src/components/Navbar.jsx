import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav className="flex justify-evenly items-center">
      <div className="flex items-center">
        <img
          alt="pokeapi-logo"
          src={logoImg}
          className="flex justify-end items-center"
        />
      </div>
      <div className="flex flex-row justify-end items-center">
        {favoritePokemons.length} ❤️
      </div>
    </nav>
  );
};

export default Navbar;
