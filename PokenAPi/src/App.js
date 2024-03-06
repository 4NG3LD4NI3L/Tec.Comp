import React, { useState, useEffect } from 'react';
import ProductCard from './components/productCard';
import { getPokemonById } from './components/pokemonApi';
import './App.css';
import Search from './components/buscar';


function App() {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try{// Obtener información de varios Pokémon
        const pokemonIds = Array.from({length:50}, (_,index) => index + 1);
        const pokemonPromises = pokemonIds.map(id => getPokemonById(id));
        const pokemonInfo = await Promise.all(pokemonPromises);
        setPokemonData(pokemonInfo);
      }catch(error){
        console.error('ERRO pokemon data:', error);
      }

    };

    fetchPokemonData();
  }, []);

  return (
    <div className="App">

      <div className='Encabezado'>
        <img src='https://cdn.pixabay.com/photo/2016/07/13/08/31/pokemon-1513925_1280.jpg' width={200} height={200}></img>
        <h1>PokemonApi</h1>
      </div>

     
      <div className='buscar-container'>
      <Search></Search>
      </div>

      <div className="App">
      <div className='product-list'>
        {pokemonData.map(pokemon => (
          <ProductCard
            key={pokemon.id}
            image={pokemon.sprites.front_default}
            name={pokemon.name}
            description={pokemon.types.map(type => type.type.name).join(', ')}
            fullDescription={pokemon.species.name}
          />
        ))}
      </div>
    </div>
        
    </div>
  );

}

export default App;