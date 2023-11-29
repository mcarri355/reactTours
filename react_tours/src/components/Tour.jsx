import React from 'react';

const Tour = ({ tour, onNotInterested }) => {
  const { name, info, image, price } = tour;

  return (
    <div className="tour-container">
      <img className="tour-image" src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>{info}</p>
        <p>${price}</p>
        <button className="not-interested-button" onClick={onNotInterested}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;


