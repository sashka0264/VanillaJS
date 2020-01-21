const searchCleaner = () => {
  const sort = document.querySelectorAll('#sort input');

  sort.forEach((item) => {
    item.value = '';
  });
};

export default searchCleaner;
