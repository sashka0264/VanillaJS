const searchPanel = (
  dataAPI,
  basket,
  updateDomBasket,
  renderControl,
  cardCreator,
  block,
  requestDirect,
  requestBasket,
) => {
  const sort = document.getElementById('sort'),
    sortButton = document.getElementById('sortButton');

  sortButton.addEventListener('click', () => {
    const cards = renderControl();

    if (basket.status) {
      requestBasket(dataAPI, cardCreator, basket, cards, block);
    } else {
      requestDirect(dataAPI, cardCreator, basket, cards, block);
    }
  });

  sort.addEventListener('input', (e) => {
    const { value, checked } = e.target;
    switch (e.target.id) {
      case 'sortByName':
        dataAPI.beerName = value;
        break;
      case 'sortByMinABV':
        dataAPI.minABV = value;
        break;
      case 'sortByMaxABV':
        dataAPI.maxABV = value;
        break;
      case 'sortByMinIBU':
        dataAPI.minIBU = value;
        break;
      case 'sortByMaxIBU':
        dataAPI.maxIBU = value;
        break;
      case 'sortByMinEBC':
        dataAPI.minEBC = value;
        break;
      case 'sortByMaxEBC':
        dataAPI.maxEBC = value;
        break;
      case 'sortByYeast':
        dataAPI.yeast = value;
        break;
      case 'sortByFood':
        dataAPI.food = value;
        break;
      case 'sortByMalt':
        dataAPI.malt = value;
        break;
      case 'sortByHops':
        dataAPI.hops = value;
        break;
      case 'periodTo':
        dataAPI.periodTo = value;
        break;
      case 'periodFrom':
        dataAPI.periodFrom = value;
        break;
      default:
        if (checked) {
          basket.addProduct({ id: e.target.parentElement.parentElement.id });
        } else {
          basket.removeProduct(e.target.parentElement.parentElement.id);
        }
        updateDomBasket(basket);
        if (basket.status) e.target.parentElement.parentElement.remove();
        break;
    }
  });
};

export default searchPanel;
