import React, { useState } from 'react';
import './productCard.css';

function ProductCard({ image, name, description, fullDescription }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={`product-card ${showFullDescription ? 'full-description' : ''}`}>
      <div className="product-info">
        {!showFullDescription && (
          <>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
          </>
        )}
        <button type="button" onClick={handleClick}>{showFullDescription ? "Ver menos" : "Ver más"}</button>
      </div>
      {showFullDescription && (
        <div className="full-description-content">
          <h2>{name}</h2>
          <p>{fullDescription}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;