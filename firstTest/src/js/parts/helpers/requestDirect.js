const requestDirect = (dataAPI, cardCreator, basket, cards, block) => {
  const error = document.getElementById('requestError');
  if (error.classList.contains('sort-error_active')) {
    error.classList.remove('sort-error_active');
  }
  dataAPI.getData()
    .then((data) => cardCreator(data, basket.checklist))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }))
    .catch((err) => {
      error.classList.add('sort-error_active');
    });
};

export default requestDirect;
