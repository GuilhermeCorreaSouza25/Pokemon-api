
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { searchPokemon } from './api';
import SearchBar from './components/Searchbar';
import Favorites from './routes/Favorites';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log('pokemon', result);
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path ="/">
            <Navbar/>
            <SearchBar
            onSearch = {onSearchHandler}
            />
          </Route>
          
          <Route exact path = '/Favorites'>
            <Navbar/>
            <Favorites/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
