const searchPanel = (dataAPI, basket, updateDomBasket, renderControl, cardCreator, block) => {
  const sort = document.getElementById('sort');
  const sortButton = document.getElementById('sortButton');

  sortButton.addEventListener('click', () => {
    const basketStatus = basket.getBasketStatus();
    const cards = renderControl();

    if (basketStatus) {
      const basketList = basket.getChecklist();
      const basketTransformed = basketList.map((item) => item.id).join('|');

      dataAPI.getBasketData(basketTransformed)
        .then((data) => cardCreator(data, basketList))
        .then((data) => data.forEach((item) => {
          cards.appendChild(item);
          block.appendChild(cards);
        }));
    } else {
      dataAPI.getData()
        .then((data) => cardCreator(data, basket.getChecklist()))
        .then((data) => data.forEach((item) => {
          cards.appendChild(item);
          block.appendChild(cards);
        }));
    }
  });

  sort.addEventListener('input', (e) => {
    const { value, checked } = e.target;
    switch (e.target.id) {
      case 'sortByName':
        dataAPI.setBeerName(value);
        break;
      case 'sortByMinABV':
        dataAPI.setMinABV(value);
        break;
      case 'sortByMaxABV':
        dataAPI.setMaxABV(value);
        break;
      case 'sortByMinIBU':
        dataAPI.setMinIBU(value);
        break;
      case 'sortByMaxIBU':
        dataAPI.setMaxIBU(value);
        break;
      case 'sortByMinEBC':
        dataAPI.setMinEBC(value);
        break;
      case 'sortByMaxEBC':
        dataAPI.setMaxEBC(value);
        break;
      case 'sortByYeast':
        dataAPI.setYeast(value);
        break;
      case 'sortByFood':
        dataAPI.setFood(value);
        break;
      case 'sortByMalt':
        dataAPI.setMalt(value);
        break;
      case 'sortByHops':
        dataAPI.setHops(value);
        break;
      case 'periodTo':
        dataAPI.setPeriodTo(value);
        break;
      case 'periodFrom':
        dataAPI.setPeriodFrom(value);
        break;
      default:
        if (checked) {
          basket.addProduct({ id: e.target.parentElement.parentElement.id });
        } else {
          basket.removeProduct(e.target.parentElement.parentElement.id);
        }
        updateDomBasket(basket);
        if (basket.getBasketStatus()) e.target.parentElement.parentElement.remove();
        break;
    }
  });
};

export default searchPanel;
