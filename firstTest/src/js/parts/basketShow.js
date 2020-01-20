const basketShow = (basket, dataAPI, cardCreator, block, renderControl, searchCleaner) => {
  const basketElement = document.getElementById('basket-show');
  const pageList = document.querySelectorAll('#pages li');

  basketElement.addEventListener('click', () => {
    const basketStatus = basket.getBasketStatus();
    const cards = renderControl();

    dataAPI.setUsePage(1);
    const usePage = dataAPI.getUsePage();
    pageList.forEach((item, i) => {
      if (i + 1 === usePage) {
        item.classList.add('sort-list_activePage');
      } else {
        item.classList.remove('sort-list_activePage');
      }
    });
    searchCleaner();
    dataAPI.restart();

    if (basketStatus) {
      basketElement.src = './img/basket.png';
      dataAPI.getData()
        .then((data) => cardCreator(data, basket.getChecklist()))
        .then((data) => data.forEach((item) => {
          cards.appendChild(item);
          block.appendChild(cards);
        }));
      basket.setBasketStatus(false);
    } else {
      basketElement.src = './img/close.png';

      const basketList = basket.getChecklist();
      const basketTransformed = basketList.map((item) => item.id).join('|');

      dataAPI.getBasketData(basketTransformed)
        .then((data) => cardCreator(data, basketList))
        .then((data) => data.forEach((item) => {
          cards.appendChild(item);
          block.appendChild(cards);
        }));

      basket.setBasketStatus(true);
    }
  });
};

export default basketShow;
