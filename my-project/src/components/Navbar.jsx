import React from 'react';
//import { Link } from 'react-router-dom';
//import FavoriteContext from '../contexts/favoritesContext';
//import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  //const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

  return (
    <nav className="flex justify-evenly items-center">
      <div className="flex items-center">
        <img
          alt="pokeapi-logo"
          src={logoImg}
          className="justify-end items-center"
        />
      </div>
      {/* <div className="flex flex-row justify-end items-center text-white">
        {favoritePokemons.length} ❤️ Favoritos
      </div> */}
      {/* <div className="flex justify-between items-center text-white">
        <ul className="hidden md:flex">
          <Link className="p-4" to="/favorites">
            Favoritos
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-black ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <h1 className="text-white">POKEAPI</h1>
          <li className="text-white">Favoritos</li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
