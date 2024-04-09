export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error: ', error);
  }
};

// import axios from 'axios';

// export const searchPokemon = async (pokemon) => {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// export const getPokemons = async (limit = 50, offset = 0) => {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/?limit${limit}offset=${offset}`)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// export const getPokemonData = async(url) => {
//   try {
//     const response = await fetch(url)
//     return await response.json()
//   } catch (error) {
//     console.log('error', error)
//   }
// }
