
const dataAPI = {
  getSingleBeer: () => new Promise((res, rej) => {
    fetch('https://api.punkapi.com/v2/beers/1')
      .then((data) => data.json())
      .then((data) => res(data));
  }),
  getTwoBeer: () => new Promise((res, rej) => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=2')
      .then((data) => data.json())
      .then((data) => res(data));
  }),
};

const transform = (arr) => { 
  return arr.map((item) => {
    const card = document.createElement('div');
    card.classList.add('cards-card');

    Object.keys(item).forEach((value) => {
      const el = document.createElement('div');
      el.textContent = `${value} = ${item[value]}`;
      card.appendChild(el);
    });

    return card;
  });
};


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.getElementById('cards');

  dataAPI.getTwoBeer()
    .then((data) => transform(data))
    .then((data) => data.forEach((item) => cards.appendChild(item)));


});
