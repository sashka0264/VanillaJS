const renderControl = () => {
  const oldCards = document.getElementById('cards');
  if (oldCards) oldCards.remove();

  const cards = document.createElement('div');
  cards.classList.add('sort-cards');
  cards.id = 'cards';
  return cards;
};

export default renderControl;
