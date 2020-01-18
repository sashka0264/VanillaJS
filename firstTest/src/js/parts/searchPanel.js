const searchPanel = (dataAPI, basket, updateDomBasket) => {
  const sort = document.getElementById('sort');

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
      default:
        if (checked) {
          basket.addProduct({ id: e.target.parentElement.parentElement.id });
        } else {
          basket.removeProduct(e.target.parentElement.parentElement.id);
        }
        updateDomBasket(basket.getChecklist().length);
        break;
    }
  });
};

export default searchPanel;
