const getCardFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("card"));
  if (data) {
    return data;
  }
  return [];
};

const addCardToLocalStorage = (product) => {
  const data = getCardFromLocalStorage();
  const remainingCard = [...data, product.id];
  localStorage.setItem("card", JSON.stringify(remainingCard));
};

const removeProductFromLocalStorage = (product) => {
  const data = getCardFromLocalStorage();
  const newData = data.filter((singleId) => singleId !== product.id);
  localStorage.setItem("card", JSON.stringify(newData));
};

export {
  getCardFromLocalStorage as getCardLS,
  addCardToLocalStorage as addCardLS,
  removeProductFromLocalStorage as removeCardLS,
};
