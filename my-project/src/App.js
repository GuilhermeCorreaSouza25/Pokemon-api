import React, { useEffect, useState } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from './api';
import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import FavoriteContext, { FavoriteProvider } from './contexts/favoritesContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Favorites from './routes/Favorites';

const favoritesKey = 'f';
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log('fetchPokemons error: ', error);
    }
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(function fetchPokemons() {
    localStorage.setItem('formData', page);
  });
  // useEffect(() => {
  //   fetchPokemons();
  // }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };
  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Searchbar onSearch={onSearchHandler} />
              {notFound ? (
                <div className="items-center p-5 text-lg justify-center">
                  Pokemon não encontrado
                </div>
              ) : (
                <Pokedex
                  pokemons={pokemons}
                  loading={loading}
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                />
              )}
            </Route>
            <Route exact path="/Favorites">
              <Navbar />
              <Searchbar onSearch={onSearchHandler} />
              {notFound ? (
                <div className="items-center p-5 text-lg justify-center">
                  Pokemon não encontrado
                </div>
              ) : (
                <Pokedex
                  pokemons={FavoriteContext.favoritePokemons}
                  loading={loading}
                  page={page}
                  setPage={setPage}
                  totalPages={totalPages}
                />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    </FavoriteProvider>
  );
}

export default App;
