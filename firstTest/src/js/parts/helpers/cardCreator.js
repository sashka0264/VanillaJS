const cardCreator = (arr, basketList) => arr.map((item) => {
  const card = document.createElement('div');
  card.classList.add('sort-cards__card');

  let checked = false;

  let malt;
  let hops;
  let yeast;

  Object.keys(item).forEach((value) => {
    let el;

    const config = {boil_volume: (item, value) => value };
    const method = config[value];
    if (method) {
      // console.log(method(item, value));
    } else {
      // console.log('Нет ничего');
    }

    switch (value) {
      case 'boil_volume':
        return;
      case 'method':
        return;
      case 'id':
        card.id = item[value];

        basketList.forEach((element) => {
          if (element.id === card.id) {
            checked = true;
          }
        });
        return;
      case 'contributed_by':
        return;
      case 'image_url':
        el = document.createElement('img');
        el.src = item[value];
        break;
      case 'volume':
        el = document.createElement('div');
        el.textContent = `Обьем: ${item[value].value} ${item[value].unit}`;
        break;
      case 'ingredients':
        el = document.createElement('div');
        malt = '(MALT): ';
        hops = '(HOPS): ';
        yeast = `(YEAST): ${item[value].yeast}`;
        item[value].malt.forEach((element) => {
          malt += `${element.name} ${element.amount.value} ${element.amount.unit}; `;
        });
        item[value].hops.forEach((element) => {
          hops += `${element.name} ${element.amount.value} ${element.amount.unit}; `;
        });

        el.textContent = `Состав: ${malt} ${hops} ${yeast}`;
        break;
      case 'brewers_tips':
        el = document.createElement('div');
        el.textContent = `Описание: ${item[value]}`;
        break;
      default:
        el = document.createElement('div');
        el.textContent = `${value}: ${item[value]}`;
        break;
    }
    card.appendChild(el);
  });

  const checkBlock = document.createElement('div');
  checkBlock.textContent = 'Добавить в корзину';
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.checked = checked;
  checkBlock.classList.add('sort-cards__card-add');
  checkBlock.appendChild(check);
  card.appendChild(checkBlock);

  return card;
});


export default cardCreator;
