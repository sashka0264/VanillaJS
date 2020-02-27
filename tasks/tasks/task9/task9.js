/**
 Дан массив, в котором могут храниться любые типы данных.
 Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
 Данные остальных типов должны остаться без изменений.
 Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы)

 flatten(
  [1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]
 );
 возвращает
  [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
 */

function flatten(arr) {
  let res;
  function search(arr1) {
    let control = true, 
      newArray = [];

    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        control = false
        let left = arr1.filter((item, index) => index < i),
          right = arr1.filter((item, index) => index > i);
        newArray = [...left, ...arr1[i], ...right];
        break;
      }
    }

    if (control === false) {
      search(newArray)
    } else {
      res = arr1;
    }
  }
  search(arr);
  return res;
}


/*------------------*/
/*    Test cases    */
/*------------------*/

/* jest workaround */
function func() {}

const testcases = [
  {
    args: [
      [1, 'any [complex] string', null, func, [1, 2, [3, '4'], 0], [], { a: 1 }]
    ],
    result: [1, 'any [complex] string', null, func, 1, 2, 3, '4', 0, { a: 1 }]
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = flatten;
