import axios from "axios";

export const fetchPokemon = async queryName => {
  const response = await axios.get(queryName);
  return response.data;
}

export default {
  fetchPokemon,
}