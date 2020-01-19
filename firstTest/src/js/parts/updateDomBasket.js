const updateDomBasket = (basket) => {
  const count = document.getElementById('basket-count');
  const basketList = basket.getChecklist();

  count.textContent = basketList.length;
};

export default updateDomBasket;
