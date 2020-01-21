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
import requestDirect from './parts/helpers/requestDirect';
import requestBasket from './parts/helpers/requestBasket';

document.addEventListener('DOMContentLoaded', () => {
  const dataAPI = new DataAPI(),
    basket = new Basket(),
    block = document.getElementById('sort'),
    cards = renderControl();

  requestDirect(
    dataAPI,
    cardCreator,
    basket,
    cards,
    block,
  );
  searchPanel(
    dataAPI,
    basket,
    updateDomBasket,
    renderControl,
    cardCreator,
    block,
    requestDirect,
    requestBasket,
  );
  pages(
    dataAPI,
    basket,
    cardCreator,
    renderControl,
    block,
    requestDirect,
    requestBasket,
  );
  updateDomBasket(basket);
  basketShow(
    basket,
    dataAPI,
    cardCreator,
    block,
    renderControl,
    searchCleaner,
    requestDirect,
    requestBasket,
  );
  popup();
  login();

});
