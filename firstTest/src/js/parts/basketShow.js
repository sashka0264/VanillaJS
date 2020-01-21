const basketShow = (
  basket,
  dataAPI,
  cardCreator,
  block,
  renderControl, searchCleaner, requestDirect, requestBasket,
) => {
  const basketElement = document.getElementById('basket-show'),
    pageList = document.querySelectorAll('#pages li');

  basketElement.addEventListener('click', () => {
    const cards = renderControl();
    dataAPI.usePage = 1;
    for (let i = 0; i < pageList.length; i += 1) {
      if (i === 0) {
        pageList[i].classList.add('sort-list_activePage');
      } else {
        pageList[i].classList.remove('sort-list_activePage');
      }
    }
    searchCleaner();
    dataAPI.restart();


    if (basket.status) {
      basketElement.src = './img/basket.png';
      requestDirect(dataAPI, cardCreator, basket, cards, block);
      basket.status = false;
    } else {
      basketElement.src = './img/close.png';
      requestBasket(dataAPI, cardCreator, basket, cards, block);
      basket.status = true;
    }
  });
};

export default basketShow;
