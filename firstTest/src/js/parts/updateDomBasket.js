const updateDomBasket = (countLength) => {
  const count = document.getElementById('basket-count');

  count.textContent = countLength;
};

export default updateDomBasket;
