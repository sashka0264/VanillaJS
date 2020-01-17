import DataAPI from './parts/dataAPI';
import searchPanel from './parts/searchPanel';
import cardCreator from './parts/cardCreator';
import renderControl from './parts/renderControl';

document.addEventListener('DOMContentLoaded', () => {
  const dataAPI = new DataAPI();
  const sortButton = document.getElementById('sortButton');
  searchPanel(dataAPI);

  sortButton.addEventListener('click', () => {
    const cards = renderControl();

    dataAPI.getData()
      .then((data) => cardCreator(data))
      .then((data) => data.forEach((item) => {
        cards.appendChild(item);
        document.body.appendChild(cards);
      }));
  });

  const cards = renderControl();

  dataAPI.getDataS()
    .then((data) => cardCreator(data))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      document.body.appendChild(cards);
    }));

});
