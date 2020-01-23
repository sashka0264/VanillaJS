const getStorage = () => {
    if (localStorage['beers-basket']) {
      return JSON.parse(localStorage['beers-basket']);
    }
    return [];
  },
  setStorage = (checklist) => {
    localStorage.setItem('beers-basket', JSON.stringify(checklist));
  };

export { getStorage, setStorage };
