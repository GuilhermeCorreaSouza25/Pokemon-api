import axios from 'axios';

export const searchPokemon = async (pokemon) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
