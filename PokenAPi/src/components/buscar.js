import React, { useState } from 'react';
import './buscar.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar pokemon"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Search;