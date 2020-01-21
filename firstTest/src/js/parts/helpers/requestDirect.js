const requestDirect = (dataAPI, cardCreator, basket, cards, block) => {
  dataAPI.getData()
    .then((data) => cardCreator(data, basket.checklist))
    .then((data) => data.forEach((item) => {
      cards.appendChild(item);
      block.appendChild(cards);
    }));
};

export default requestDirect;
