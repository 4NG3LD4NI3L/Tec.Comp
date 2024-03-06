import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Función para obtener la información de un Pokémon por su ID
export const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return null;
  }
};