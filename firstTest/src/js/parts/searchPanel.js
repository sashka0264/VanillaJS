const searchPanel = (dataAPI) => {
  const sortByName = document.getElementById('sortByName');
  const sortByMinABV = document.getElementById('sortByMinABV');
  const sortByMaxABV = document.getElementById('sortByMaxABV');
  const sortByMinIBU = document.getElementById('sortByMinIBU');
  const sortByMaxIBU = document.getElementById('sortByMaxIBU');
  const sortByMinEBC = document.getElementById('sortByMinEBC');
  const sortByMaxEBC = document.getElementById('sortByMaxEBC');
  const sortByYeast = document.getElementById('sortByYeast');
  const sortByFood = document.getElementById('sortByFood');
  const sortByMalt = document.getElementById('sortByMalt');
  const sortByHops = document.getElementById('sortByHops');

  sortByName.addEventListener('input', (e) => dataAPI.setBeerName(e.target.value));
  sortByMinABV.addEventListener('input', (e) => dataAPI.setMinABV(e.target.value));
  sortByMaxABV.addEventListener('input', (e) => dataAPI.setMaxABV(e.target.value));
  sortByMinIBU.addEventListener('input', (e) => dataAPI.setMinIBU(e.target.value));
  sortByMinIBU.addEventListener('input', (e) => dataAPI.setMinIBU(e.target.value));
  sortByMaxIBU.addEventListener('input', (e) => dataAPI.setMaxIBU(e.target.value));

  sortByMinEBC.addEventListener('input', (e) => dataAPI.setMinEBC(e.target.value));
  sortByMaxEBC.addEventListener('input', (e) => dataAPI.setMaxEBC(e.target.value));
  sortByYeast.addEventListener('input', (e) => dataAPI.setYeast(e.target.value));
  sortByFood.addEventListener('input', (e) => dataAPI.setFood(e.target.value));
  sortByMalt.addEventListener('input', (e) => dataAPI.setMalt(e.target.value));
  sortByHops.addEventListener('input', (e) => dataAPI.setHops(e.target.value));
};

export default searchPanel;
