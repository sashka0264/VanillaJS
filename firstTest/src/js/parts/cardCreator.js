const cardCreator = (arr) => arr.map((item) => {
  const card = document.createElement('div');
  card.classList.add('cards-card');

  Object.keys(item).forEach((value) => {
    // console.log(value, item[value])
    if (value === 'contributed_by') {
      return;
    }
    let el;
    if (value === 'image_url') {
      el = document.createElement('img');
      el.src = item[value];
    } else {
      el = document.createElement('div');

      if (value === 'volume') {
        el.textContent = `Обьем: ${item[value].value} ${item[value].unit}`;
      } else if (value === 'ingredients') {
        let str = 'Состав: ';
        // console.log(item[value].malt)
        item[value].malt.forEach((item) => {
          str += `${item.name} ${item.amount.value} ${item.amount.unit}; `;
        });
        item[value].hops.forEach((item) => {
          str += `${item.name} ${item.amount.value} ${item.amount.unit}; `;
        });

        str += item[value].yeast;
        el.textContent = str;
      } else if (value === 'brewers_tips') {
        el.textContent = `Описание: ${item[value]}`;
      }  else {
        el.textContent = `${value}: ${item[value]}`;
      }
    }
    card.appendChild(el);
  });

  return card;
});


export default cardCreator;
