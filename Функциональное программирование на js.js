// Идея парадигмы функционального программирования заключается в том, что мы принимаем в качестве аргументов какие-то данные, при этом сами данные не меняются, мы делаем копии этих данных, и далее работаем с ними

// Объект с которым мы будем работать
const user = {
  name: 'Kim',
  isActive: true,
  cart: [], // корзина
  purchases: [] // покупки
};

// История покупок
const purhcaseHistory = [];

// Задача:
// 1. Сделать функцию добавления товара в корзину
// 2. Добавить налог на товар
// 3. Купить товар (cart --> purchases)
// 4. Обнулить корзину

/* -- Вспомогательные функции -- */
const compose = (f, g) => (...args) => f(g(...args)) // первая функция принимает параметром (две функции) => (массив аргументов(в качестве аргументов могут быть и другие функции)) => первая функция вызывает по цепочке вторую функцию, и далее то, что передано в массиве (...args)

/* --  Основные функции -- */

// 1. Сделать функцию добавления товара в корзину
const addItemToCart = (user, item) => { // функция принимает параметром главный объект user, а так же сам товар
  purhcaseHistory.push(user); // ведем историю покупок пользователя
  const updatedCart = user.cart.concat(item); // объединяем товар с массивом cart
  return Object.assign({}, user, { cart: updatedCart }); // копируем все свойства искомого объекта, так же меняем добавляем в корзину новый товар
};

// 2. Добавить налог на товар
const addTaxToItem = (user) => {
  purhcaseHistory.push(user);
  const { cart } = user;
  const taxRate = 1.13; // ставка по налогу 13%
  const updatedCart = cart.map(item => { // возвращаем обновленную корзину, где на товар накидывается определенный налог
    return {
      name: item.name,
      price: (item.price * taxRate),
    }
  });
  return Object.assign({}, user, { cart : updatedCart });
};

// 3. Купить товар (cart --> purchases)
const purchaseItem = (user) => {
  purhcaseHistory.push(user);
  const { cart } = user;
  return Object.assign({}, user, { purchases : cart });
};

// 4. Обнулить корзину
const emptyCart = (user) => {
  purhcaseHistory.push(user);
  return Object.assign({}, user, { cart: [] });
};

/* -- Функция, которая вмещает в себя полный цикл покупки -- */
const purchaseCycle = (...fns) => fns.reduce(compose); // здесь мы по сути копируем функционал вспм. функции compose (честно, пока не разобрался как это работает)

const buyItem = purchaseCycle(
  emptyCart,
  purchaseItem,
  addTaxToItem,
  addItemToCart
); // функция агрегатор

const newItem = buyItem(user, { name: 'tablet', price: 300 }); // новый товар

console.log('История покупок: ', purhcaseHistory);
console.log('Оригинальный объект: ', user); // должен остаться без изменений
