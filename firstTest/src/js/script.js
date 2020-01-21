import DataAPI from './parts/DataAPI';
import Basket from './parts/Basket';
import updateDomBasket from './parts/updateDomBasket';
import basketShow from './parts/basketShow';
import searchPanel from './parts/searchPanel';
import cardCreator from './parts/helpers/cardCreator';
import renderControl from './parts/helpers/renderControl';
import pages from './parts/pages';
import popup from './parts/popup';
import login from './parts/login';
import searchCleaner from './parts/helpers/searchCleaner';

document.addEventListener('DOMContentLoaded', () => {
  const dataAPI = new DataAPI();
  const basket = new Basket();
  const block = document.getElementById('sort');
  searchPanel(dataAPI, basket, updateDomBasket, renderControl, cardCreator, block);
  pages(dataAPI, basket, cardCreator, renderControl, block);
  updateDomBasket(basket);
  basketShow(basket, dataAPI, cardCreator, block, renderControl, searchCleaner);
  popup();
  login();


  const cards = renderControl();

  dataAPI.getData()
    .then((data) => cardCreator(data, basket.getChecklist()))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }));
});


const person = 'Sasha';
const some = person === 'Sasha' ? 10 : 5;
