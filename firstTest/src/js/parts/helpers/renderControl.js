const renderControl = () => {
  const oldCards = document.getElementById('cards'),
    cards = document.createElement('div');
  if (oldCards) oldCards.remove();
  cards.classList.add('sort-cards');
  cards.id = 'cards';
  return cards;
};

export default renderControl;
