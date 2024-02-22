import React from 'react';

function ProductCard({image, name, description}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Ver</button>
    </div>
  );
}

export default ProductCard;