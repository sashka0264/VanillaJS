import DataAPI from './parts/dataAPI';
import searchPanel from './parts/searchPanel';
import cardCreator from './parts/cardCreator';
import renderControl from './parts/renderControl';
import pages from './parts/pages';

document.addEventListener('DOMContentLoaded', () => {
  const dataAPI = new DataAPI();
  const sortButton = document.getElementById('sortButton');
  const block = document.querySelector('.container');
  searchPanel(dataAPI);
  pages(dataAPI);

  sortButton.addEventListener('click', () => {
    const cards = renderControl();

    dataAPI.getData()
      .then((data) => cardCreator(data))
      .then((data) => data.forEach((item) => {
        cards.appendChild(item);
        block.appendChild(cards);
      }));
  });

  const cards = renderControl();

  dataAPI.getDataS()
    .then((data) => cardCreator(data))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }));

});
