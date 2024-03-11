import React, { useState, useEffect } from 'react';
import ProductCard from './components/productCard';
import { getPokemonById } from './components/pokemonApi';
import './App.css';
import Search from './components/buscar';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [resultados, setResultados] = useState(pokemonData);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonIds = Array.from({ length: 50 }, (_, index) => index + 1);
        const pokemonPromises = pokemonIds.map(id => getPokemonById(id));
        const pokemonInfo = await Promise.all(pokemonPromises);
        setPokemonData(pokemonInfo);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleSearch = (query) => {
    // Filtrar los resultados según la consulta de búsqueda
    const filteredResults = pokemonData.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setResultados(filteredResults);
  };

  

  return (
    <div className="App">
      <div className='Encabezado'>
        <img src='https://cdn.pixabay.com/photo/2016/07/13/08/31/pokemon-1513925_1280.jpg' width={200} height={200} alt="Pokemon" />
        <h1>PokemonApi</h1>
      </div>

      <div className='buscar-container'>
        <Search  onSearch={handleSearch} className="buscador"/>
      </div>

      <div className='product-list'>
    {resultados.length > 0 ? (
        resultados.map(pokemon => (
            <ProductCard
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                description={pokemon.types.map(type => type.type.name).join(', ')}
                fullDescription={`Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(' <--> ')}, Moves: ${pokemon.moves.map(move => move.move.name).join(' <-->')}`}
            />
        ))
    ) : (
        pokemonData.map(pokemon => (
            <ProductCard
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                description={pokemon.types.map(type => type.type.name).join(', ')}
                fullDescription={`Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(' <--> ')}, Moves: ${pokemon.moves.map(move => move.move.name).join(' <-->')}`}
            />
        ))
    )}
</div>
    </div>
  );
}

export default App;