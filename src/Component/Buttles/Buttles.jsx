import React, { use, useEffect, useState } from "react";
import SingleButtle from "./SingleButtle";
import Card from "./Card";
import { addCardLS, getCardLS, removeCardLS } from "../../utilite/localhost";

const Buttles = ({ buttleData }) => {
  const buttleDatas = use(buttleData);

  const [cardProduct, setCardProduct] = useState([]);

  const handleCard = (product) => {
    const cardRemaining = [...cardProduct, product];
    setCardProduct(cardRemaining);
    addCardLS(product);
  };

  const handleCardRemove = (product) => {
    const remainingData = cardProduct.filter((pd) => pd.id !== product.id);
    setCardProduct(remainingData);
    removeCardLS(product);
  };

  useEffect(() => {
    const dataFromLocalStorage = getCardLS();
    console.log("Local storage Card data", getCardLS());
    const cardDataFull = [];
    if (dataFromLocalStorage.length > 0) {
      console.log("ki hoilo");
      for (const id of dataFromLocalStorage) {
        const productData = buttleDatas.find(
          (singleData) => singleData.id === id
        );
        cardDataFull.push(productData);
      }
      setCardProduct(cardDataFull);
    }
  }, []);

  return (
    <div>
      <h3>Add to Card</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {cardProduct.map((pd) => (
          <Card key={pd.id} pd={pd} handleCardRemove={handleCardRemove}></Card>
        ))}
      </div>
      <h1>Our Popular Product</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {buttleDatas.map((buttle) => (
          <SingleButtle
            key={buttle.id}
            buttle={buttle}
            handleCard={handleCard}
          ></SingleButtle>
        ))}
      </div>
    </div>
  );
};

export default Buttles;
