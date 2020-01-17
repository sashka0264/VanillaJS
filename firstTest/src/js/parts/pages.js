const pages = (dataAPI) => {
  const parent = document.getElementById('pages');

  const pagesLength = dataAPI.getPages();
  const usePage = dataAPI.getUsePage();

  for (let i = 1; i <= pagesLength; i += 1) {
    const li = document.createElement('li');
    li.textContent = i;
    if (i === usePage) li.classList.add('pages_activePage');

    parent.appendChild(li);
  }

  parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      console.log(e.target.textContent);
    }
  })
};

export default pages;
