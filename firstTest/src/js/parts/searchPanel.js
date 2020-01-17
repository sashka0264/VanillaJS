const searchPanel = (dataAPI) => {
  const sortByName = document.getElementById('sortByName');
  const sortByMinABV = document.getElementById('sortByMinABV');
  const sortByMaxABV = document.getElementById('sortByMaxABV');

  sortByName.addEventListener('input', (e) => dataAPI.setBeerName(e.target.value));
  sortByMinABV.addEventListener('input', (e) => dataAPI.setMinABV(e.target.value));
  sortByMaxABV.addEventListener('input', (e) => dataAPI.setMaxABV(e.target.value));
};

export default searchPanel;
