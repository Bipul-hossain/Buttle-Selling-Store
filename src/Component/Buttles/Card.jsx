import React from "react";

const Card = ({ pd, handleCardRemove }) => {
  const { id, name, capacity, color, price, inStock, image } = pd;
  return (
    <div>
      <img style={{ width: 50 }} src={image} alt="" />
      <p>Name: {name}</p>
      <button onClick={() => handleCardRemove(pd)}>Remove</button>
    </div>
  );
};

export default Card;
