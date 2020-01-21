const updateDomBasket = (basket) => {
  const count = document.getElementById('basket-count');
  count.textContent = basket.checklist.length;
};

export default updateDomBasket;
