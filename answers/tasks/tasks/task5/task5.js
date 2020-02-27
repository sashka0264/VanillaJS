/**
 Дан список целых чисел, повторяющихся элементов в списке нет.
 Нужно преобразовать это множество в строку,
 сворачивая соседние по числовому ряду числа в диапазоны.

 compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'
 compress([1, 4, 3, 2]) // '1-4'
 compress([1, 4]) // '1,4'

 **/

function compress(list) {
  const arr = list.sort((a, b) => a - b), newArr = [];
  let control;

  for (let i = 0; i < arr.length; i++) {
    if (!control && control !== 0) control = arr[i];
    if (i === 0) continue;

    if (arr[i] !== arr[i - 1] + 1) {
      if (control !== arr[i - 1]) {
        newArr.push(`${control}-${arr[i - 1]}`); // если число не одиночное, пушим коллекцию
      } else {
        newArr.push(`${control}`); // если число одиночное, то пушим его
      }
      if (i === arr.length - 1) {
        newArr.push(`${arr[i]}`); // если число последнее, пушим его
      } else {
        control = arr[i]; // если не последнее, то делаем новый control
      }
    } else {
      if (i === arr.length - 1) newArr.push(`${control}-${arr[i]}`);
    }
  }

  return newArr.join(',');
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      [1, 4, 5, 2, 3, 9, 8, 11, 0]
    ],
    result: '0-5,8-9,11'
  },
  {
    args: [
      [1, 4, 3, 2]
    ],
    result: '1-4'
  },
  {
    args: [
      [1, 4]
    ],
    result: '1,4'
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = compress;
