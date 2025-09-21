import React from "react";

const SingleButtle = ({ buttle, handleCard }) => {
  const { id, name, capacity, color, price, inStock, image } = buttle;
  return (
    <>
      <div>
        <img style={{ width: 200 }} src={image} alt="" />
        <h2>Name: {name}</h2>
        <p>Price: {price}</p>
        <button onClick={() => handleCard(buttle)}>Add to Card</button>
      </div>
    </>
  );
};

export default SingleButtle;
