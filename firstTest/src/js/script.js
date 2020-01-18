import DataAPI from './parts/dataAPI';
import Basket from './parts/basket';
import updateDomBasket from './parts/updateDomBasket';
import searchPanel from './parts/searchPanel';
import cardCreator from './parts/cardCreator';
import renderControl from './parts/renderControl';
import pages from './parts/pages';

document.addEventListener('DOMContentLoaded', () => {
  const dataAPI = new DataAPI();
  const basket = new Basket();
  const sortButton = document.getElementById('sortButton');
  const block = document.getElementById('sort');
  searchPanel(dataAPI, basket, updateDomBasket);
  pages(dataAPI);
  updateDomBasket(basket.getChecklist().length);

  sortButton.addEventListener('click', () => {
    const cards = renderControl();

    dataAPI.getData()
      .then((data) => cardCreator(data, basket.getChecklist()))
      .then((data) => data.forEach((item) => {
        cards.appendChild(item);
        block.appendChild(cards);
      }));
  });

  const cards = renderControl();

  dataAPI.getDataS()
    .then((data) => cardCreator(data, basket.getChecklist()))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }));

});
