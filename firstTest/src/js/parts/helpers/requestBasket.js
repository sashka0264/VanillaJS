const requestBasket = (dataAPI, cardCreator, basket, cards, block) => {
  const error = document.getElementById('requestError'),
    basketTransformed = basket.checklist.map((item) => item.id).join('|');
  if (error.classList.contains('sort-error_active')) {
    error.classList.remove('sort-error_active');
  }

  dataAPI.getBasketData(basketTransformed)
    .then((data) => cardCreator(data, basket.checklist))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }))
    .catch((err) => {
      error.classList.add('sort-error_active');
    });
};

export default requestBasket;
