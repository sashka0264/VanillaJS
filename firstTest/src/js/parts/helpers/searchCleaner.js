const searchCleaner = () => {
  const sort = document.querySelectorAll('#sort input');

  for (let i = 0; i < sort.length - 1; i += 1) {
    sort[i].value = '';
  }
};

export default searchCleaner;
