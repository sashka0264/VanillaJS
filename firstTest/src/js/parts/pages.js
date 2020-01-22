const pages = (
  dataAPI,
  basket,
  cardCreator,
  renderControl,
  block,
  requestDirect,
  requestBasket,
) => {
  const parent = document.getElementById('pages');

  for (let i = 1; i <= dataAPI.pages; i += 1) {
    const li = document.createElement('li');
    li.textContent = i;
    if (i === dataAPI.usePage) li.classList.add('sort-list_activePage');

    parent.appendChild(li);
  }

  parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      for (let i = 0; i < dataAPI.pages; i += 1) {
        if (parent.children[i].textContent !== e.target.textContent) {
          parent.children[i].classList.remove('sort-list_activePage');
        } else {
          parent.children[i].classList.add('sort-list_activePage');
        }
      }
      dataAPI.usePage = e.target.textContent;
      const cards = renderControl(),
        basketStatus = basket.status;
      if (basketStatus) {
        requestBasket(dataAPI, cardCreator, basket, cards, block);
      } else {
        requestDirect(dataAPI, cardCreator, basket, cards, block);
      }
    }
  });
};

export default pages;
