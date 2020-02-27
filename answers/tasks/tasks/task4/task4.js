/**
 * Написать функцию, которая определяет, является ли переданная строка палиндромом
 * (читается слева-направо и справа-налево одинаково).
 *
 * Примеры палиндромов:
 * - Казак
 * - А роза упала на лапу Азора
 * - Do geese see God?
 * - Madam, I’m Adam
 *
 * Ограничение по памяти O(1).
 */

function isPalindrome(str, i = 0) {
  // const string = str.toLowerCase().replace(/[ ?’,]/g, ''); // в [] указан пробел и символ ? на удаление
  const arr = str.toLowerCase().split('');

  while (i < arr.length) {
    if (arr[i] === '?' || arr[i] === '’' || arr[i] === ',' || arr[i] === ' ') {
      arr.splice(i, 1);
      i -= 1;
    }
    i += 1;
  }
  const reversed = [...arr].reverse();
  return !arr.filter((item, i) => reversed[i] !== item).length;
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [{
    args: [
      'Казак'
    ],
    result: true
  },
  {
    args: [
      'А роза упала на лапу Азора'
    ],
    result: true
  },
  {
    args: [
      'Do geese see God?'
    ],
    result: true
  },
  {
    args: [
      'Madam,  I’m Adam'
    ],
    result: true
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = isPalindrome;