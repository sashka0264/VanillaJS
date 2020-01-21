const cardCreator = (arr, basketList) => {
  const createTemplate = (parent, tag, text, src, create) => {
    const el = document.createElement(tag);
    if (text) el.textContent = text;
    if (src) el.src = src;
    if (create) parent.appendChild(el);
  };

  return arr.map((itemCard) => {
    let checked = false,
      malt,
      hops,
      yeast;
    const card = document.createElement('div'),
      checkBlock = document.createElement('div'),
      check = document.createElement('input'),
      config = {
        boil_volume: () => null,
        method: () => null,
        contributed_by: () => null,

        id: (item, value) => {
          card.id = item[value];
          basketList.forEach((element) => {
            if (element.id === card.id) {
              checked = true;
            }
          });
        },
        image_url: (item, value) => {
          createTemplate(card, 'img', false, item[value], true);
        },
        volume: (item, value) => {
          createTemplate(
            card,
            'div',
            `${(value[0].toUpperCase() + value.slice(1)).replace(/_/g, '')}: ${item[value].value} ${item[value].unit}`,
            false,
            true,
          );
        },
        name: (item, value) => {
          createTemplate(card, 'div', `Name: ${item[value]}`, false, true);
        },
        tagline: (item, value) => {
          createTemplate(card, 'div', `${item[value]}`, false, true);
        },
        first_brewed: (item, value) => {
          createTemplate(card, 'div', `The first brewed was ${item[value]}`, false, true);
        },
        ingredients: (item, value) => {
          malt = '(MALT): ';
          hops = '(HOPS): ';
          yeast = `(YEAST): ${item[value].yeast}`;
          item[value].malt.forEach((element) => {
            malt += `${element.name} ${element.amount.value} ${element.amount.unit}; `;
          });
          item[value].hops.forEach((element) => {
            hops += `${element.name} ${element.amount.value} ${element.amount.unit}; `;
          });
          createTemplate(card, 'div', `Structure: ${malt} ${hops} ${yeast}`, false, true);
        },
      };
    card.classList.add('sort-cards__card');

    Object.keys(itemCard).forEach((value) => {
      const method = config[value];

      if (method) {
        method(itemCard, value);
      } else {
        createTemplate(
          card,
          'div',
          `${(value[0].toUpperCase() + value.slice(1)).replace(/_/g, ' ')}: ${itemCard[value]}`,
          false,
          true,
        );
      }
    });

    checkBlock.textContent = 'Добавить в корзину';
    check.type = 'checkbox';
    check.checked = checked;
    checkBlock.classList.add('sort-cards__card-add');

    checkBlock.appendChild(check);
    card.appendChild(checkBlock);
    return card;
  });
};

export default cardCreator;
