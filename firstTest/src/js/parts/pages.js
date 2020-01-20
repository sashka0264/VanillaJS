const pages = (dataAPI, basket, cardCreator, renderControl, block) => {
  const parent = document.getElementById('pages');

  const pagesLength = dataAPI.getPages();
  const usePage = dataAPI.getUsePage();

  for (let i = 1; i <= pagesLength; i += 1) {
    const li = document.createElement('li');
    li.textContent = i;
    if (i === usePage) li.classList.add('sort-list_activePage');

    parent.appendChild(li);
  }

  parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      for (let i = 0; i < pagesLength; i += 1) {
        if (parent.children[i].textContent !== e.target.textContent) {
          parent.children[i].classList.remove('sort-list_activePage');
        } else {
          parent.children[i].classList.add('sort-list_activePage');
        }
      }
      dataAPI.setUsePage(e.target.textContent);
      const cards = renderControl();
      const basketStatus = basket.getBasketStatus();
      if (basketStatus) {
        const basketList = basket.getChecklist();
        const basketTransformed = basketList.map((item) => item.id).join('|');
        dataAPI.getBasketData(basketTransformed)
          .then((data) => cardCreator(data, basketList))
          .then((data) => data.forEach((item) => {
            cards.appendChild(item);
            block.appendChild(cards);
          }));
      } else {
        dataAPI.getData()
          .then((data) => cardCreator(data, basket.getChecklist()))
          .then((data) => data.forEach((item) => {
            cards.appendChild(item);
            block.appendChild(cards);
          }));
      }
    }
  });
};

export default pages;
