import React from 'react';


const Search = () => {

  return (
    <div className="search">
      <input 
        type="text"
        
        className="search-input"
        placeholder="Nombre de la receta" 
      />
      <button type="submit">Buscar</button>
    </div>
  );

}

export default Search;