import React from 'react';
import './buscar.css';

const Search = () => {

  return (
    <div className="search">
      <input 
        type="text"
        
        className="search-input"
        placeholder="Buscar pokemon" 
      />
      <button type="submit">Buscar</button>
    </div>
  );

}

export default Search;