const basketShow = (basket, dataAPI, cardCreator, block, renderControl) => {
  const basketElement = document.getElementById('basket-show');

  basketElement.addEventListener('click', () => {
    basket.setBasketStatus(true);
    const cards = renderControl();
    const basketList = basket.getChecklist();
    const basketTransformed = basketList.map((item) => item.id).join('|');

    dataAPI.getBasketData(basketTransformed)
      .then((data) => cardCreator(data, basketList))
      .then((data) => data.forEach((item) => {
        cards.appendChild(item);
        block.appendChild(cards);
      }));
  });
};

export default basketShow;
