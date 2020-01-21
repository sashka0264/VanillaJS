const requestBasket = (dataAPI, cardCreator, basket, cards, block) => {
  const basketTransformed = basket.checklist.map((item) => item.id).join('|');

  dataAPI.getBasketData(basketTransformed)
    .then((data) => cardCreator(data, basket.checklist))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }));
};

export default requestBasket;
