const cardCreator = (arr) => arr.map((item) => {
  const card = document.createElement('div');
  card.classList.add('cards-card');

  Object.keys(item).forEach((value) => {
    let el;
    if (value === 'image_url') {
      el = document.createElement('img');
      el.src = item[value];
    } else {
      el = document.createElement('div');
      el.textContent = `${value} = ${item[value]}`;
    }
    card.appendChild(el);
  });

  return card;
});


export default cardCreator;
